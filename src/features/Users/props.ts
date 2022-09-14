import { User } from "@/types/user";
export type UsersProps = {
  userList: User[];
};

export type UserCardProps = {
  userFilteredList: User[] | undefined;
};
