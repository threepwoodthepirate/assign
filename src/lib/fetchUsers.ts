import { apiGetUsersEndpoint, API_KEY } from "./../config/api";
import axios, { AxiosResponse } from "axios";
import { User } from "@/types/user";

export const fetchUsers = async () => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: API_KEY,
  };
  try {
    const response: AxiosResponse = await axios.get<User[]>(
      apiGetUsersEndpoint,
      { headers }
    );
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    } else {
    }
  }
};
