import { GetStaticPaths, GetStaticProps } from "next";

import axios from "axios";
import { User } from "@/types/user";
import { REVALIDATE } from "@/config/api";
import { fetchUsers } from "@/lib/fetchUsers";
import { IParams, UserProp } from "@/features/User/props";

export const getStaticProps: GetStaticProps<UserProp> = async (context) => {
  const { slug } = context.params as IParams;

  try {
    const data: User[] = await fetchUsers();

    const user: User = data.filter((u) => u.name == slug)[0];

    return { props: { user: user ?? undefined }, revalidate: REVALIDATE };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.message);
    }
    return {
      props: { user: undefined, revalidate: REVALIDATE },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs: User[] = await fetchUsers();
  const paths = slugs.map((user: User) => {
    return {
      params: { slug: user.name ?? "" },
    };
  });
  return {
    paths,
    fallback: "blocking",
  };
};

export { User as default } from "@/features/User/components";
