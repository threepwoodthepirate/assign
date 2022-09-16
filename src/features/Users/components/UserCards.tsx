import Card from "@/components/Card/Card";
import { UserCardProps } from "../props";

export const UserCards: React.FC<UserCardProps> = ({
  userFilteredList,
}): JSX.Element => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
      {userFilteredList &&
        userFilteredList?.map((employee, idx) => {
          return (
            <li key={`${employee.email} + ${idx}`}>
              <Card
                name={employee.name ?? ""}
                mainText={employee.mainText ?? ""}
                imagePortraitUrl={employee.imagePortraitUrl ?? ""}
                email={employee.email ?? ""}
              ></Card>
            </li>
          );
        })}
    </ul>
  );
};
