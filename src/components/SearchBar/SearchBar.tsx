import { SearchIcon } from "@/components/icons/SearchIcon";
import { SearchProps } from "./props";

const SearchBar: React.FC<SearchProps> = ({
  handleSearch,
  disabled = false,
}) => {
  return (
    <div className="flex items-center justify-between p-2 pb-2 mx-auto mt-4 mb-4 space-x-2 transition duration-300 ease-in border rounded-lg border-slate-700 align-items bg-slate-700">
      <SearchIcon></SearchIcon>
      <label className="hidden" htmlFor="search">
        Search
      </label>
      <input
        autoComplete="off"
        disabled={disabled}
        onChange={handleSearch}
        name="search"
        placeholder="Search by name.."
        className="w-full px-2 py-2 leading-6 transition duration-300 ease-in rounded-md text-md focus:outline-none bg-slate-700 text-gray-50 placeholder-slate-200"
      />
    </div>
  );
};

export default SearchBar;
