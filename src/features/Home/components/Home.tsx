import type { NextPage } from "next";

import { UsersProps } from "@/features/Users/props";
import PageLayout from "@/components/Layout/PageLayout";
import { UserCards } from "@/features/Users/components";
import { Logo } from "@/components/Logo";
import SearchBar from "@/components/SearchBar/SearchBar";

export const Home: NextPage<UsersProps> = ({ userList }) => {
  console.log(userList.length);
  return (
    <PageLayout>
      <div className="h-full">
        <Logo></Logo>
        <div className="flex flex-col items-center justify-between mb-2 md:flex-row">
          <h1 className="my-4 sm:my-0">Welcome to the fellowship of 1337</h1>
          <button
            title="Show users in a plain list and grid list"
            // onClick={}
            className="h-10 px-4 text-sm font-normal text-white transition duration-300 ease-in bg-blue-600 rounded-md shadow-xl  font-poppins hover:text-blue-100 hover:bg-blue-600"
          >
            Toggle listview
          </button>
        </div>
        <SearchBar disabled={false}></SearchBar>
        <UserCards userFilteredList={userList}></UserCards>
      </div>
    </PageLayout>
  );
};
