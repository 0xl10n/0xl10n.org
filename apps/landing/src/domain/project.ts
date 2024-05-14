import { Locale } from "./locale";

export type Project = {
  id: string;
  title: string;
  thumbnailUrl: string;
  description: string;
  type: string;
  locales: Locale[];
};
