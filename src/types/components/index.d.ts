export interface ILoginForm {
  j_username: string;
  j_password: string;
}

export type WordType = "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
export type WordKey = "regular" | "bold";

export type WordStylePath = `${WordType}/${WordKey}`;

export type ButtonType =
  | "white"
  | "animate-ping"
  | "orange"
  | "orange-2"
  | "gradient-purple"
  | "transparent"
  | "";

export type RotationType = "left" | "right" | "top" | "bottom";

export type TabFilterType = "recommend" | "gameHall";
