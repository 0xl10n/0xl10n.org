const webpack = require('webpack');

const esmModules = [
    "@rainbow-me",
    "@spruceid",
    "wagmi",
    "@wagmi",
    "github\\.com\\+gitcoinco\\+allo\\-indexer\\-client",
];

module.exports = {
    webpack: {
        plugins: {
            add: [
                new webpack.ProvidePlugin({
                    Buffer: ['buffer', 'Buffer'],
                }),
            ],
        },
    },
    jest: {
        configure: () => ({
            preset: "ts-jest/presets/js-with-ts",
            testEnvironment: "jsdom",
            clearMocks: true,
            resetMocks: true,
            coverageProvider: "v8",
            verbose: true,
            // @rainbow-me/rainbowkit is already an ESM module and
            // it trips Jest when it tries to transform it, this ignores it
            transformIgnorePatterns: [
                `/node_modules/.pnpm/(?!(${esmModules.join("|")}))`,
            ],
            moduleNameMapper: {
                "\\.(css|styl|less|sass|scss|png|jpg|svg|ttf|woff|woff2)$":
                    require.resolve("jest-transform-stub"),
            },
            setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
            testPathIgnorePatterns: ["/e2e/"],
        }),
    },
};
