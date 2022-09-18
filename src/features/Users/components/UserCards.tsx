import Card from "@/components/Card/Card";
import { Reveal } from "@/components/Reveal/Reveal";
import { UserCardProps } from "../props";

export const UserCards: React.FC<UserCardProps> = ({
  userFilteredList,
}): JSX.Element => {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-max">
      {userFilteredList &&
        userFilteredList?.map((employee, idx) => {
          return (
            <li key={`${employee.email} + ${idx}`}>
              <Reveal>
                <Card
                  name={employee.name ?? ""}
                  mainText={employee.mainText ?? ""}
                  imagePortraitUrl={employee.imagePortraitUrl ?? ""}
                  email={employee.email ?? ""}
                ></Card>
              </Reveal>
            </li>
          );
        })}
    </ul>
  );
};
