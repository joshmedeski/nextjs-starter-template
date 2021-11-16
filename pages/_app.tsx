import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Layout from "@/layout/Layout";

function NextJsStarterTemplate({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default NextJsStarterTemplate;
