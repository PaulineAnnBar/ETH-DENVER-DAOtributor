import { chain, createClient, configureChains } from "wagmi";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

export const { chains, provider } = configureChains(
  [
    chain.polygonMumbai,
    chain.mainnet,
    chain.rinkeby,
    chain.optimism,
    chain.arbitrum,
    chain.polygon,
    chain.localhost,
    chain.hardhat,
  ],
  [
    alchemyProvider({ apiKey: "CnO8binqsQVaQ8pkeS8vTBdceSRsYC8-" }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "Hola Mundo DApp",
  chains,
});
export const wagmiClient = createClient({
  // autoConnect: true,
  connectors,
  provider,
});
