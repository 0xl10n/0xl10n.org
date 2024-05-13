import { Locale } from "./locale";

export type Attestor = {
  id: number;
  name: string;
  profileUrl?: string;
  description: string;
  score: number;
  wordCount?: number;
  locales: Locale[];
};
