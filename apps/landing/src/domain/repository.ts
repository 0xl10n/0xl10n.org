import { Locale } from "./locale";

export type Repository = {
  id: string;
  title: string;
  projectId: string,
  thumbnailUrl?: string;
  description: string;
  url?: string;
  type: string;
  locales: Locale[];
};
