import type { NextPage } from "next";

import { UsersProps } from "@/features/Users/props";
import PageLayout from "@/components/Layout/PageLayout";
import { UserCards } from "@/features/Users/components";
import { Logo } from "@/components/Logo";
import SearchBar from "@/components/SearchBar/SearchBar";
import { useRef, useState } from "react";
import { useFilter } from "@/hooks/useFilter";
import { useToggle } from "@/hooks/useToggle";
import { UserList } from "@/features/Users/components/UserList";

export const Home: NextPage<UsersProps> = ({ userList }) => {
  const [query, setQuery] = useState<String>("");
  const userFilteredList = useFilter(userList, query);
  const { showGrid, toggle } = useToggle();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement> | undefined
  ) => {
    const queryValue = event?.target.value;
    setQuery(queryValue ?? "");
  };

  return (
    <PageLayout>
      <div className="h-full">
        <Logo></Logo>
        <div className="flex flex-col items-center justify-between mb-2 md:flex-row">
          <h1 className="my-4 sm:my-0">Welcome to the fellowship of 1337</h1>
          <button
            title="Show users in a plain list and grid list"
            onClick={toggle}
            className="h-10 px-4 text-sm font-normal text-white transition duration-300 ease-in bg-blue-600 rounded-md shadow-xl font-poppins hover:text-blue-100 hover:bg-blue-600"
          >
            Toggle listview
          </button>
        </div>
        <SearchBar
          disabled={false}
          handleSearch={handleInputChange}
        ></SearchBar>
        {showGrid && (
          <UserCards userFilteredList={userFilteredList}></UserCards>
        )}
        {!showGrid && <UserList userFilteredList={userFilteredList}></UserList>}
        {(!userFilteredList || userFilteredList.length == 0) && (
          <h3>Sorry, no users found. Try a different name.</h3>
        )}
        {userList.length == 0 && <h3>Something unexpected happened..</h3>}
      </div>
    </PageLayout>
  );
};
