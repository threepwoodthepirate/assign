import { apiGetUsersEndpoint } from "@/config/api";

import { rest } from "msw";
import { users } from "@/mocks/data/users";
import { User } from "@/types/user";

export const userGetHandler = rest.get(
  apiGetUsersEndpoint,
  async (_, res, ctx) => {
    return res(ctx.status(200), ctx.json<User[]>(users));
  }
);

export const userHandlerEmpty = rest.get(
  apiGetUsersEndpoint,
  async (_, res, ctx) => {
    return res(ctx.status(200), ctx.json<User[]>([]));
  }
);

export const userHandlers = [userGetHandler, userHandlerEmpty];
