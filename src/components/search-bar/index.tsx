import IconFilter from "@/utils/icons/IconFilter";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="w-full flex justify-between items-center space-x-5 space-y-5 py-3">
      <div className="w-fit h-full cursor-pointer p-2">
        <IconFilter />
      </div>

      {/* <SearchInput /> */}
      <form className="w-full flex items-center max-w-sm">
        <div className="relative w-full">
          <input
            name="searchbar"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-400 block w-full p-2.5  dark:bg-gray-700/50 dark:border-gray-600 dark:focus:outline-none dark:placeholder-gray-400 dark:text-white"
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
    </div>
  );
};

export default SearchBar;
