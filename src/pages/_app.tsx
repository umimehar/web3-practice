import "@styles/globals.css";
import type { AppProps } from "next/app";
import { OneColumnLayout } from "@components/layout/one-column-layout";
import { TwoColumnLayout } from "@components/layout/two-column-layout";
import { Provider as LayoutProvider } from "reactjs-slot-layout/dist";
import ThemeProvider from "@components/ThemeProvider";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "@util/sdks/react-query";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { AuthProvider } from "src/context/AuthContext";

const layouts = {
  OneColumn: OneColumnLayout,
  TwoColumn: TwoColumnLayout,
};
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider value={layouts}>
      <>
        <QueryClientProvider client={queryClient}>
          {process.env.NODE_ENV === "development" && (
            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          )}
          <ThemeProvider>
            <AuthProvider>
              <ThirdwebProvider
                desiredChainId={ChainId.Rinkeby}
                sdkOptions={{
                  gasless: {
                    openzeppelin: {
                      relayerUrl: process.env.NEXT_PUBLIC_RELAYER_URL,
                    },
                  },
                }}
              >
                <Component {...pageProps} />
              </ThirdwebProvider>
            </AuthProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </>
    </LayoutProvider>
  );
}

export default MyApp;
