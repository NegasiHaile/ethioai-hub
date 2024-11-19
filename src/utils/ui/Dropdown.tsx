"use client";
import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("Search by category");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOptions = ["Dataset", "Models"];

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed top-0 left-0 w-full h-full bg-transparent z-100"
        />
      )}
      <div
        className={` relative flex sm:block w-fit items-center space-x-5 sm:space-x-0 space-y-2`}
      >
        <div className="relative w-full">
          <div
            className="sm:border rounded-md w-full px-2 py-2 flex space-x-2 items-center text-font-14 text-white/80 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <p>{value}</p>
          </div>
          {isOpen && (
            <div className="min-h-24 border py-2 space-y-2 absolute w-full h-fit max-h-60 overflow-auto p-2 bg-current rounded-md z-100 dark:bg-gray-900">
              {filteredOptions.map((option, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center space-x-1 cursor-pointer w-fit px-2"
                  >
                    <div className="w-5 h-5 border rounded"></div>
                    <p>{option}</p>
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
