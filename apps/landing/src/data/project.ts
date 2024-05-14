import { Locale } from "../domain/locale";
import { Project } from "../domain/project";

export const PROJECT_DATA = [
  {
    id: '1',
    title: "Translate for Ethereum Fellowship Study Group",
    thumbnailUrl: 'https://blog.ethereum.org/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fethereum-hackmd%2Fupload_d439352ab17d519d44cef02091cbb661.png&w=1080&q=75',
    description:
      'The Ethereum Protocol Fellowship (EPF) is a program designed to reduce the barrier to entry for developers interested in working on the core protocol. As core developer (and EPF creator) Piper Merriam likes to say, the door is comically wide open. EPF helps you walk through it.',
    type: "video",
    locales: [Locale.EN, Locale.ZH_TW],
  },
 
  {
    id: '2',
    title: "Translate for EAS Website",
    description:
      "Ethereum Attestation Service (EAS) is an infrastructure public good for making attestations onchain or offchain about anything.",
    type: "website",

    locales: [Locale.EN, Locale.ZH_TW],
  },
  {
    id: '3',
    title: "Translate ETHGlobal Denver Pragama",
    description: "Denver playlist",
    type: "video",

    locales: [Locale.EN, Locale.ZH_TW],
  },
  {
    id: '4',
    title: "Translate for Passport website",
    description:
      'Gitcoin Passport is a Sybil defense tool that makes it easy to protect your web3 community from bots and bad actors. Connect your wallet below to access the Passport Scorer app, which helps you create a "Scorer" for the application you want to protect from Sybil attackers.',
    type: "website",
    locales: [Locale.EN, Locale.ZH_TW],
  },
] as Project[];
