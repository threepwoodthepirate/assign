export interface IUserData {
  name: string;
  email: string;
  phoneNumber: string;
  office: string;
  manager: string;
  orgUnit: string;
  mainText: string | null;
  gitHub: null;
  twitter: null;
  stackOverflow: null;
  linkedIn: null;
  imagePortraitUrl: null;
  imageWallOfLeetUrl: null;
  highlighted: boolean;
  published: boolean;
}

export type User = Omit<
  IUserData,
  | "phoneNumber"
  | "manager"
  | "orgUnit"
  | "gitHub"
  | "twitter"
  | "stackOverflow"
  | "highlighted"
  | "published"
>;
