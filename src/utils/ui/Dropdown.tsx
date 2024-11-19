"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import IconFilter from "../icons/IconFilter";
import { filterOptions } from "../constants";
import { FilterOptionsTypes } from "../types";

type DropdownProps = {
  checkedFilters: FilterOptionsTypes;
  setCheckedFilters: Dispatch<SetStateAction<FilterOptionsTypes>>;
};

const Dropdown = ({ checkedFilters, setCheckedFilters }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 left-0 w-full h-full bg-transparent"
        />
      )}
      <div className="relative flex sm:block w-full md:w-fit items-center space-x-5 sm:space-x-0 space-y-2">
        <div className="relative w-full">
          <div
            className="border rounded-md w-full min-w-56 px-2 py-2 flex space-x-2 items-center opacity-60 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IconFilter />
            <p>Filter by category</p>
          </div>
          {isOpen && (
            <div className="search-select min-h-24 max-h-[500px] z-50 border py-3 space-y-3 absolute min-w-full h-fit overflow-auto p-2 rounded-md z-100 bg-white dark:bg-black">
              {Object.entries(filterOptions).map(([key, values], index) => {
                if (values.length === 0) return null;
                // Ensuring the key is treated as a valid key from FilterOptionsTypes
                const typedKey = key as keyof FilterOptionsTypes;

                return (
                  <div
                    key={index}
                    className={`${
                      Object.keys(filterOptions).length - 1 !== index &&
                      "border-b"
                    } pb-2 space-y-1 capitalize`}
                  >
                    <label className="font-bold">{key}</label>
                    {values.map((option, i) => {
                      return (
                        <div
                          key={i}
                          className="flex font-extralight opacity-80 items-center space-x-1 cursor-pointer w-fit px-2"
                        >
                          <input
                            id={option}
                            type="checkbox"
                            checked={checkedFilters[typedKey].some(
                              (item: string) =>
                                item.toLowerCase() === option.toLowerCase()
                            )}
                            className="h-5 w-5 cursor-pointer transition-all rounded shadow hover:shadow-md border border-none bg-red-300 peer-checked:bg-gray-500 checked:border-slate-800"
                            onChange={() => {
                              const updatedFilters = { ...checkedFilters }; // Copy current filters
                              const existing = updatedFilters[typedKey]; // Get the current array for the key

                              // Add or remove the option based on its presence
                              if (
                                existing.some(
                                  (item: string) =>
                                    item.toLowerCase() === option.toLowerCase()
                                )
                              ) {
                                updatedFilters[typedKey] = existing.filter(
                                  (item: string) =>
                                    item.toLowerCase() !== option.toLowerCase()
                                );
                              } else {
                                updatedFilters[typedKey] = [
                                  ...existing,
                                  option,
                                ];
                              }

                              setCheckedFilters(updatedFilters);
                            }}
                          />
                          <p className=" text-nowrap">{option}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
