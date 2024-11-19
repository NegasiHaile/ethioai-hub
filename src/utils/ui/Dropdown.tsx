"use client";
import React, { useState } from "react";
import IconFilter from "../icons/IconFilter";
import { filterOptions } from "../constants";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [value, setValue] = useState("Filter by category");
  // const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 left-0 w-full h-full bg-transparent"
        />
      )}
      <div
        className={`relative flex sm:block w-fit items-center space-x-5 sm:space-x-0 space-y-2`}
      >
        <div className="relative w-full">
          <div
            className="border rounded-md w-full px-2 py-2 flex space-x-2 items-center opacity-60 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IconFilter />
            <p>Filter by category</p>
          </div>
          {isOpen && (
            <div className="search-select min-h-24 max-h-[500px] z-50 border py-3 space-y-3 absolute w-full h-fit overflow-auto p-2 rounded-md z-100 bg-white dark:bg-black">
              {Object.entries(filterOptions).map(([key, values], index) => {
                if (values.length === 0) return null;
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
                          className={`flex font-extralight opacity-80 items-center space-x-1 cursor-pointer w-fit px-2`}
                        >
                          <div className="w-5 h-5 border rounded"></div>
                          <p>{option}</p>
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
