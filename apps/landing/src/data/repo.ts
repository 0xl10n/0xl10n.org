import { Locale } from "../domain/locale";
import { Repository } from "../domain/repository";

export const REPO_DATA = [
  {
    id: 1,
    title: "Recap 2024",
    description: "Youtube video -1.",
    type: "video",
    locales: [Locale.EN, Locale.ZH_TW],
  },
  {
    id: 2,
    title: "Atoms, Institutions, Blockchains - Pragma Denver 2024",
    description: "Join Josh Stark from the Ethereum Foundation for his talk titled, \"Atoms, Institutions, Blockchains.\"",
    type: "video",
    locales: [Locale.EN, Locale.ZH_TW],
  },
  {
    id: 3,
    title: "Global Onchain Economy - Pragma Denver 2024",
    description: "Join Jesse Pollak from Base as he discusses the global onchain economy with ETHGlobal's Kartik Talwar.  Their talk was part of Pragma Denver 2024.\"",
    type: "video",
    locales: [Locale.EN, Locale.ZH_TW],
  },
] as Repository[];
