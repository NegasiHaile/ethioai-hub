import IconFilter from "@/utils/icons/IconFilter";
import Dropdown from "@/utils/ui/Dropdown";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="w-full  block md:flex items-center space-y-3 md:space-x-5 md:justify-between md:space-y-0 py-3">
      {/* <SearchInput /> */}
      <form className="w-full h-full flex items-center md:max-w-sm">
        <div className="relative w-full">
          <input
            name="searchbar"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            id="voice-search"
            className="border border-gray-300 rounded-lg focus:border-gray-400 block w-full p-2.5 bg-transparent dark:border-gray-600 dark:focus:outline-none"
            placeholder="Search datasets, models and papers..."
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </form>

      {/* <div className="w-full md:w-fit h-full cursor-pointer bg-red-400"> */}
      <Dropdown />
      {/* </div> */}
    </div>
  );
};

export default SearchBar;
