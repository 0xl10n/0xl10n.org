import { Attestor } from "../domain/attestor";
import { Locale } from "../domain/locale";
import { Repository } from "../domain/repository";

export const ATTESTORS_DATA = [
  {
    id: 1,
    name: "Enyi",
    // profileUrl: "https://pbs.twimg.com/profile_images/1771105296607326208/fxqZscPe_400x400.png",
    score: 34.5,
    wordCount: 7430,
    description:
      "Mastering 7 languages, she has experience working in the field of translation for 5 years. Currently picking up Thai in Bangkok",
      locales: [Locale.EN, Locale.ZH_TW, Locale.JA, Locale.KO],
  },
  {
    id: 2,
    name: "Vincent",
    profileUrl: "https://pbs.twimg.com/profile_images/1771105296607326208/fxqZscPe_400x400.png",
    description:
      "Mastering 7 languages, she has experience working in the field of translation for 5 years. Currently picking up Thai in Bangkok",
    score: 64.5,
    wordCount: 7430,
    locales: [Locale.EN, Locale.ZH_TW, Locale.JA],
  },
  {
    id: 3,
    name: "Brian",
    profileUrl: "https://pbs.twimg.com/profile_images/1163460536840753154/pSwBx1q7_400x400.jpg",
    description:
      "Mastering 7 languages, she has experience working in the field of translation for 5 years. Currently improving his Japanese",
    score: 28.5,
    wordCount: 5430,
    locales: [Locale.EN, Locale.ES_ES],
  },
  {
    id: 4,
    name: "Ken",
    profileUrl: "https://pbs.twimg.com/profile_images/1786244534088949760/DxPdShTw_400x400.jpg",
    description:
      "Experience working in Vietnam",
    score: 31.5,
    wordCount: 710,
    locales: [Locale.EN, Locale.VI],
  },
  {
    id: 5,
    name: "Justin",
    profileUrl: "https://pbs.twimg.com/profile_images/904745626528751616/M1np70_P_400x400.jpg",
    description:
      "Experienced Tech consultant who is currently residing in Kyoto, Japan.",
    score: 54.1,
    wordCount: 2430,
    locales: [Locale.EN, Locale.JA],
  },

  
].map((attestor)=>{
  return {
  ...attestor,
  profileUrl: attestor.profileUrl || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
  }
}) as Attestor[];
