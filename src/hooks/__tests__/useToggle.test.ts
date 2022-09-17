import { renderHook, act } from "@testing-library/react-hooks";
import { useToggle } from "./../useToggle";

test("should toggle the state", () => {
  const { result } = renderHook(() => useToggle(false));

  expect(result.current.showGrid).toBe(false);

  act(() => {
    result.current.toggle();
  });

  expect(result.current.showGrid).toBe(true);

  act(() => {
    result.current.toggle();
  });

  expect(result.current.showGrid).toBe(false);
});

test("should set initial state", () => {
  const { result } = renderHook(() => useToggle(false));

  expect(result.current.showGrid).toBe(false);

  act(() => {
    result.current.toggle();
  });

  expect(result.current.showGrid).toBe(true);
});
