export type SearchProps = {
  searchRef: React.MutableRefObject<HTMLInputElement | null>;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement> | undefined) => void;
  disabled: boolean;
};
