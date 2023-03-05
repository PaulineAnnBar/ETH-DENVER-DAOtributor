import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { WagmiConfig } from "wagmi";
import { wagmiClient } from "../helpers/rainbowSetup";
import { ApolloProvider } from "@apollo/client";
import client from "../helpers/apollo-client";

function MyApp({ Component, pageProps }) {
  const appInfo = {
    appName: "Hola Mundo",
  };

  return (
    <WagmiConfig client={wagmiClient}>
      <ApolloProvider client={client}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </WagmiConfig>
  );
}

export default MyApp;
