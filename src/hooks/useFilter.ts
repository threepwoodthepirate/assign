import { useEffect, useState } from "react";
import { User } from "@/types/user";

const useFilter = (userList: User[], query: String) => {
  const [userFilteredList, setUserFilteredList] = useState<User[] | undefined>(
    userList
  );

  useEffect(() => {
    const foundItems = userList.filter(
      (item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.office.toLowerCase().includes(query.toLowerCase())
    );
    setUserFilteredList(foundItems);
  }, [query, userList]);

  return userFilteredList;
};

export { useFilter };
