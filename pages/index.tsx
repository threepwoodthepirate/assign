import { GetStaticProps } from "next";

import axios from "axios";
import { User } from "@/types/user";
import type { UsersProps } from "@/features/Users/props";
import { REVALIDATE } from "@/config/api";
import { fetchUsers } from "@/lib/fetchUsers";

export const getStaticProps: GetStaticProps<UsersProps> = async () => {
  try {
    const data: User[] = await fetchUsers();
    return { props: { userList: data ?? [] }, revalidate: REVALIDATE };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
    }
    return {
      props: { userList: [], revalidate: REVALIDATE },
    };
  }
};

export { Home as default } from "@/features/Home/components";
