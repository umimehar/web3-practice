import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Web3Auth, Web3AuthOptions } from "@web3auth/web3auth";
import {
  ADAPTER_EVENTS,
  CHAIN_NAMESPACES,
  SafeEventEmitterProvider,
} from "@web3auth/base";
import RPC from "./evm";
import { ethers } from "ethers";
import { Web3Provider } from "@ethersproject/providers";

type AuthContextType = {
  user: boolean;
  walletAddresses: string[];
  login: () => void;
  logout: () => void;
  isLoading: boolean;
  web3AuthInstance: Web3Auth;
  privateKey: string;
  ethersProvider: Web3Provider;
};

const authContextDefaultValues: AuthContextType = {
  user: null,
  login: () => {},
  logout: () => {},
  walletAddresses: [],
  isLoading: false,
  web3AuthInstance: null,
  privateKey: null,
  ethersProvider: null,
};

const AuthContext = createContext<AuthContextType>(authContextDefaultValues);

export function useAuth() {
  return useContext(AuthContext);
}

type Props = {
  children: ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [web3AuthInstance, setWeb3AuthInstance] = useState<Web3Auth | null>(
    null
  );
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [wallets, setWallets] = useState<string[]>([]);
  const [privateKey, setPrivateKey] = useState<string>(null);
  const [ethersProvider, setEthersProvider] = useState<Web3Provider>(null);
  useEffect(() => {
    const init = async () => {
      try {
        setIsLoading(true);
        const web3AuthCtorParams: Web3AuthOptions = {
          clientId:
            "BKAjE1lfbm9CLSpmtzlKO5lzhkbhME5_6nHVy4Ejtc3DJPw_WNoN3RIa2gJM0oc00WJSsJU16Hw7gREclg2SL8Q",
          chainConfig: {
            chainNamespace: CHAIN_NAMESPACES.EIP155,
            chainId: "0x4",
            rpcTarget:
              // "https://api.defender.openzeppelin.com/autotasks/fd43dd1a-55f7-4586-9cc0-ea31e54dd965/runs/webhook/8e835f85-8cab-4690-b26c-df7300f5361e/CqNTfGeRBUEemJHj92JYm4",
              "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", // This is the testnet RPC we have added, please pass on your own endpoint while creating an app
          },
          uiConfig: {
            theme: "dark",
            loginMethodsOrder: ["facebook", "twitter", "google"],
            appLogo: "/assets/icon-inverted.png", // Your App Logo Here
          },
        };
        const { Web3Auth } = await import("@web3auth/web3auth");
        const web3AuthInstance = new Web3Auth(web3AuthCtorParams);
        subscribeAuthEvents(web3AuthInstance);
        setWeb3AuthInstance(web3AuthInstance);
        await web3AuthInstance.initModal();
        setIsLoading(false);
        // initiate ether provider
      } catch (error) {
        console.error(error);
      }
    };

    const subscribeAuthEvents = (web3AuthInstance: Web3Auth) => {
      // Can subscribe to all ADAPTER_EVENTS and LOGIN_MODAL_EVENTS
      web3AuthInstance.on(ADAPTER_EVENTS.CONNECTED, async (data: unknown) => {
        const rpc = new RPC(web3AuthInstance.provider);
        const promises: Promise<any>[] = [
          web3AuthInstance.getUserInfo(),
          new Promise(async (resolve) => {
            const acc = await rpc.getAccounts();
            resolve(acc);
          }),
        ];
        const results = await Promise.all(promises);
        setUser(results[0]);
        setWallets(results[1]);
        // setTimeout(async () => {
        //   await getPrivateKey(web3AuthInstance);
        // }, 500);
        const provider = new ethers.providers.Web3Provider(
          web3AuthInstance.provider,
          "any" // change that from env
        );
        setEthersProvider(provider);

        // console.log(privateKey, "privateKey");
        // setPrivateKey(privateKey);

        console.log("connected", ...results, web3AuthInstance);
      });

      web3AuthInstance.on(ADAPTER_EVENTS.CONNECTING, () => {
        console.log("connecting");
      });

      web3AuthInstance.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        console.log("disconnected");
        setUser(null);
        setWallets([]);
      });
    };

    init();
  }, []);

  const getPrivateKey = async (web3AuthInstance: Web3Auth) => {
    if (!web3AuthInstance) {
      console.log("web3auth not initialized yet");
      return;
    }
    const privateKey: string = await web3AuthInstance.provider.request({
      method: "eth_private_key",
    });
    console.log(privateKey, "privateKey");
    setPrivateKey(privateKey);
  };

  const login = async () => {
    if (!web3AuthInstance) {
      console.log("web3auth not initialized yet");
      return;
    }
    const provider = await web3AuthInstance.connect();
    setProvider(provider);
  };
  const logout = async () => {
    if (!web3AuthInstance) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3AuthInstance.logout();
    setProvider(null);
  };
  const onGetAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const userAccount = await rpc.getAccounts();
    console.log("User account", userAccount);
  };

  const value: AuthContextType = {
    walletAddresses: wallets,
    user,
    login,
    logout,
    isLoading,
    web3AuthInstance: web3AuthInstance,
    privateKey,
    ethersProvider,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}
