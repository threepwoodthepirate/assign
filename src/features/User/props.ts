import { User } from "@/types/user";
import { ParsedUrlQuery } from "querystring";

export interface IParams extends ParsedUrlQuery {
  slug: string;
}

export type UserProp = {
  user: User | undefined;
};
