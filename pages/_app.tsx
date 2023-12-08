import { LoadingContext } from "@/global-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const[loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{loading, setLoading}}>
      <Component {...pageProps} />
    </LoadingContext.Provider>
  );
}
