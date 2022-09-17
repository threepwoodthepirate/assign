import { useCallback, useState } from "react";

export const useToggle = (initialState = true) => {
  const [showGrid, setShowGrid] = useState(initialState);

  const toggle = useCallback(() => setShowGrid((state) => !state), []);

  return { showGrid, toggle };
};
