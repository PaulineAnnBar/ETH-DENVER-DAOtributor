import { setup } from "@liquality/wallet-sdk";

export function setupSDK() {
  setup({
    alchemyApiKey: "YOUR_API_KEY_HERE",
    etherscanApiKey: "YOUR_API_KEY_HERE",
    infuraProjectId: "-",
    pocketNetworkApplicationID: "283d101b86594691b3e5556e67da0790",
    quorum: 1,
    slowGasPriceMultiplier: 1,
    averageGasPriceMultiplier: 1.5,
    fastGasPriceMultiplier: 2,
    gasLimitMargin: 2000,
  });
}
