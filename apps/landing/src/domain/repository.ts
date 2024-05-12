import { Locale } from "./locale";

export type Repository = {
    id: number;
    title: string;
    description: string;
    type: string;
    locales: Locale[]
}