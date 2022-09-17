import ListCard from "@/components/ListCard/ListCard";
import { UserCardProps } from "../props";

export const UserList: React.FC<UserCardProps> = ({
  userFilteredList,
}): JSX.Element => {
  return (
    <ul className="flex flex-col w-full auto-rows-max">
      {!userFilteredList && <li>No user found</li>}
      {userFilteredList &&
        userFilteredList?.map((employee, idx) => {
          return (
            <li
              className="flex flex-row mb-4"
              key={`${employee.email} + ${idx}`}
            >
              <ListCard
                name={employee.name ?? ""}
                mainText={employee.mainText ?? ""}
                imagePortraitUrl={employee.imagePortraitUrl ?? ""}
                email={employee.email ?? ""}
              ></ListCard>
            </li>
          );
        })}
    </ul>
  );
};
