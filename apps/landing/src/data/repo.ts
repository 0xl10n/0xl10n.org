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
    id: 1,
    title: "Pragam 2",
    description: "Youtube video -1.",
    type: "video",
    locales: [Locale.EN, Locale.ZH_TW],
  },
] as Repository[];
