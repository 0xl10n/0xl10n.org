import { Attestor } from "../domain/attestor";
import { Locale } from "../domain/locale";
import { TranslationUnit } from "../domain/translation-unit";
import { ATTESTORS_DATA } from "./attestors";

export const TRANSLATION_UNIT = [
    {
        id: "1",
        projectId: "1",
        repositoryId: "1",
        sourceLocale: Locale.EN,
        toLocale:Locale.ZH_TW,
        sourceString: "Lorem source",
        toString: "Lorem",
        suggestions:[
            {
                toString: 'Lorem',
                translatedBy: {
                    name: "Enyi",
                    score: 84.5
                }
            },
            {
                toString: 'Lorem 2',
                translatedBy: {
                    name: "Vincent",
                    score: 84.5
                }
            }
        ],
        attestedProfiles: ATTESTORS_DATA.map(({name, profileUrl})=>({
            name,
            profileUrl
        }))
    }
] as TranslationUnit[];



