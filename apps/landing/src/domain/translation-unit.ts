import { Attestor } from "./attestor";
import { Locale } from "./locale";

export type TranslationUnit = {
    id: string;
    projectId?: string,
    repositoryId: string,
    sourceLocale:Locale,
    toLocale:Locale
    attestedProfiles: Partial<Attestor>[];
    sourceString: string;
    toString: string;
    suggestions:{
        toString:string,
        translatedBy:Partial<Attestor>
    }[];
}
