import { Locale } from "./locale";

export type Attestor = {
  id: number;
  name: string;
  description: string;
  score: number;
  locales: Locale[];
};
