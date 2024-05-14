import { Locale } from "../domain/locale";
import { Repository } from "../domain/repository";

export const REPO_DATA = [
  {
    id: "1",
    projectid: "1",
    title: "Recap 2024",
    description: "Youtube video -1.",
    type: "video",
    locales: [Locale.EN, Locale.ZH_TW],
  },
  {
    id: "2",
    projectid: "1",
    title: "Atoms, Institutions, Blockchains - Pragma Denver 2024",
    description: "Join Josh Stark from the Ethereum Foundation for his talk titled, \"Atoms, Institutions, Blockchains.\"",
    type: "video",
    locales: [Locale.EN, Locale.ZH_TW],
  },
  {
    id: "3",
    projectid: "1",
    title: "Global Onchain Economy - Pragma Denver 2024",
    description: "Join Jesse Pollak from Base as he discusses the global onchain economy with ETHGlobal's Kartik Talwar.  Their talk was part of Pragma Denver 2024.\"",
    type: "video",
    locales: [Locale.EN, Locale.ZH_TW],
  },
  // fellowship

  {
    id: "4",
    projectId: "1",
    title: "Sharding & DAS | Dankrad | Week 6 Research",
    url: 'https://www.youtube.com/watch?v=ro2AGRkLC2s',
    thumbnailUrl: 'https://img.youtube.com/vi/ro2AGRkLC2s/sddefault.jpg',
    description: "Week 6 research track is going to be a dive into data availability sampling and danksharding.",
    type: "video",
    locales: [Locale.EN, Locale.ZH_TW],
  },
  {
    id: "5",
    projectId: "1",
    title: "Ethereum Execution Layer Overview | lightclient | Week 2",
    description: "An overview of the execution layer.",
    url: 'https://www.youtube.com/watch?v=ro2AGRkLC2s',
    thumbnailUrl: 'https://img.youtube.com/vi/ro2AGRkLC2s/sddefault.jpg',
    type: "video",
    locales: [Locale.EN, Locale.ZH_TW],
  },
  {
    id: "6",
    projectId: "1",
    title: "Consensus Upgrades | Francesco | Week 10 Research",
    description: "Week 10 research talk will cover variety of Beacon Chain upgrades currently researched, analyzed and considered for inclusion.",
    
    url: 'https://www.youtube.com/watch?v=ro2AGRkLC2s',
    thumbnailUrl: 'https://img.youtube.com/vi/ro2AGRkLC2s/sddefault.jpg',
    type: "video",
    locales: [Locale.EN, Locale.ZH_TW],
  },

] as Repository[];
