import React from "react";
import ReactDOM from "react-dom";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const { chains, provider } = configureChains(
    [chain.localhost, chain.mainnet],
    [publicProvider()]
);
const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
});
const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});

function RainbowKitLogin() {
    return (
        <>
            <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider chains={chains}>
                    {/* <button
                        type="button"
                        className=" text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
                    >
                        Connect Wallet
                    </button> */}
                    <ConnectButton />
                </RainbowKitProvider>
            </WagmiConfig>
        </>
    );
}

export default RainbowKitLogin;

if (document.getElementById("rainbow_kit_login__react")) {
    ReactDOM.render(
        <RainbowKitLogin />,
        document.getElementById("rainbow_kit_login__react")
    );
} else {
    console.log("element not found to render react component");
}
