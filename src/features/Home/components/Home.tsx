import type { NextPage } from "next";

import { UsersProps } from "@/features/Users/props";
import PageLayout from "@/components/Layout/PageLayout";

export const Home: NextPage<UsersProps> = ({ userList }) => {
  console.log(userList.length);
  return (
    <PageLayout>
      <div className="h-full">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h1 className="my-4 sm:my-0">Welcome to the fellowship of 1337</h1>
        </div>

        <h3>Test</h3>
      </div>
    </PageLayout>
  );
};
