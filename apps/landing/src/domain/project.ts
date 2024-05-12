import { Locale } from "./locale";

export type Project = {
    id: number;
    title: string;
    description: string;
    type: string;
    locales: Locale[]
}