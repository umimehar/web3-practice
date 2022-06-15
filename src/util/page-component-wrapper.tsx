import React, { ReactElement, useEffect, useState } from "react";

export function renderWhenReadyClientSide(Comp: any): () => React.ReactElement {
  const Wrapper: () => ReactElement = () => {
    const [isReady, setIsReady] = useState(
      typeof window === "undefined" ? false : !!window["isClientSideReady"]
    );
    useEffect(() => {
      if (!isReady) {
        setIsReady(true);
        window["isClientSideReady"] = true;
      }
      return () => {};
    }, []);
    if (isReady) {
      return <Comp />;
    } else {
      return null;
    }
  };
  return Wrapper;
}

export function ClientSidePageComp({ children, loader }: any) {
  const [isReady, setIsReady] = useState(
    typeof window === "undefined" ? false : !!window["isClientSideReady"]
  );

  useEffect(() => {
    if (!isReady) {
      setIsReady(true);
      window["isClientSideReady"] = true;
    }
  }, []);

  if (isReady) {
    return children;
  } else {
    return loader ? loader : null;
  }
}
