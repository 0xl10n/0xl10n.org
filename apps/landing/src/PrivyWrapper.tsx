'use client';

import { PrivyProvider } from "@privy-io/react-auth";
import React from "react";
const privyAppId =
    process.env.REACT_APP_PRIVY_APP_ID || "clv8gazq204exi1o8ryjhe3xw";


export const PrivyWrapper = ({ children }: { children: React.ReactNode }) => {

    return (
        <PrivyProvider
            appId={privyAppId}
            config={{
                // Display email and wallet as login methods
                loginMethods: ["email", "wallet"],
                // Customize Privy's appearance in your app
                appearance: {
                    theme: "light",
                    accentColor: "#676FFF",
                    logo: "https://pbs.twimg.com/profile_images/1785127184170106880/gDB0YSSW_400x400.jpg",
                },
                // Create embedded wallets for users who don't have a wallet
                embeddedWallets: {
                    createOnLogin: "users-without-wallets",
                },
            }}
        >
            {children}
        </PrivyProvider>
    )
}