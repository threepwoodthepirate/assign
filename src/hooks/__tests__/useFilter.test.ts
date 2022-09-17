import { renderHook } from "@testing-library/react-hooks";
import { useFilter } from "@/hooks/useFilter";
import { users } from "@/mocks/data/users";

test("it filters list and should return 1 item", () => {
  const { result } = renderHook(() => useFilter(users, "nic"));
  expect(result.current?.length).toBe(1);
});
