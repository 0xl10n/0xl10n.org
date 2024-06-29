'use client';
import { base, baseSepolia } from 'viem/chains';
import { PrivyProvider } from "@privy-io/react-auth";
import React from "react";
import { OnchainKitProvider } from '@coinbase/onchainkit';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const privyAppId =
    process.env.REACT_APP_PRIVY_APP_ID || "clv8gazq204exi1o8ryjhe3xw";


const queryClient = new QueryClient();

export const PrivyWrapper = ({ children }: { children: React.ReactNode }) => {
    return (

        <QueryClientProvider client={queryClient}>
            <OnchainKitProvider apiKey="YOUR_PUBLIC_API_KEY" chain={base}>
                <PrivyProvider
                    appId={privyAppId}
                    config={{
                        // Display email and wallet as login methods
                        defaultChain: base,
                        loginMethods: ["email", "wallet"],
                        // Customize Privy's appearance in your app
                        appearance: {

                            //   showWalletLoginFirst: true, 
                            theme: "light",
                            accentColor: "#676FFF",
                            logo: "https://pbs.twimg.com/profile_images/1785127184170106880/gDB0YSSW_400x400.jpg",
                            walletList: ['coinbase_wallet'],
                        },
                        externalWallets: {
                            coinbaseWallet: {
                                // Valid connection options include 'eoaOnly' (default), 'smartWalletOnly', or 'all'
                                connectionOptions: 'smartWalletOnly',
                            },
                        },
                        // Create embedded wallets for users who don't have a wallet
                        embeddedWallets: {
                            createOnLogin: "users-without-wallets",
                        },
                        // blockExplorers: {
                        //     default: { name: 'Explorer', url: 'my-custom-chain-block-explorer' },
                        // },
                    }}
                >
                    {children}
                </PrivyProvider>
            </OnchainKitProvider>
        </QueryClientProvider>
    )
}

// https://docs.privy.io/guide/react/authentication/status