import { Attestor } from "../domain/attestor";
import { Locale } from "../domain/locale";
import { Repository } from "../domain/repository";

export const ATTESTORS_DATA = [
    {
        id: 1,
        name: 'Enyi',
        score: 34.5,
        description : 'Mastering 7 languages, she has experience working in the field of translation for 5 years. Currently picking up Thai in Bangkok',
        locales: [
            Locale.EN,
            Locale.ZH_TW
        ]
    },
    {
        id: 2,
        name: 'Vincent',
        description : 'Mastering 7 languages, she has experience working in the field of translation for 5 years. Currently picking up Thai in Bangkok',
        score: 34.5,
        locales: [
            Locale.EN,
            Locale.ZH_TW
        ]
    },
    {
        id: 2,
        name: 'Brian',
        description: 'Mastering 7 languages, she has experience working in the field of translation for 5 years. Currently improving his Japanese',
        score: 34.5,
        locales: [
            Locale.EN,
            Locale.ES_ES
        ]
    }
] as Attestor[];