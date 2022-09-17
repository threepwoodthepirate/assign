import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { useRef } from "react";
import SearchBar from "../SearchBar";

// const testRef = (
//   ref: React.MutableRefObject<HTMLInputElement | null>
// ): void => {
//   if (ref.current) ref.current.focus();
// };

describe("Input value", () => {
  it("updates on change", () => {
    const setSearch = jest.fn((value) => {});

    const { queryByPlaceholderText } = render(
      <SearchBar handleSearch={setSearch} disabled={false} />
    );

    const searchInput = queryByPlaceholderText("Search...");
    if (searchInput) {
      fireEvent.change(searchInput, { target: { value: "test" } });

      expect(searchInput).toBe("test");
    }
  });
});
