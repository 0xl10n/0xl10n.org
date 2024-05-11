import { Locale } from "../domain/locale";
import { Project } from "../domain/project";

export const PROJECT_DATA = [
    {
        id: 1,
        title: "Translate for Passport website",
        description: "Gitcoin Passport is a Sybil defense tool that makes it easy to protect your web3 community from bots and bad actors. Connect your wallet below to access the Passport Scorer app, which helps you create a \"Scorer\" for the application you want to protect from Sybil attackers.",
        type: "website",
        locales: [
            Locale.EN,
            Locale.ZH_TW
        ]
    },
    {
        id: 2,
        title: "Translate for EAS Website",
        description: "Ethereum Attestation Service (EAS) is an infrastructure public good for making attestations onchain or offchain about anything.",
        type: "website",
        
        locales: [
            Locale.EN,
            Locale.ZH_TW
        ]
    },
    {
        id: 3,
        title: "Translate ETHGlobal Denver Pragama",
        description: "Denver playlist",
        type: "video",
        
        locales: [
            Locale.EN,
            Locale.ZH_TW
        ]
    }
] as Project[];