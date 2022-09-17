export const BASE_API_URL =
  process.env.NEXT_PUBLIC_API || process.env.NEXT_PUBLIC_API_DEV;
export const API_MOCKING = process.env.API_MOCKING || "false";
export const API_KEY = process.env.API_KEY || "";
export const REVALIDATE = 120;

export const apiGetUsersEndpoint = process.env.API_URL || "";
