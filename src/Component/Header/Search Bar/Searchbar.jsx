import React from "react";

function Searchbar({ toogleSearch }) {
  return (
    <div id="search-input" className="container mx-auto">
      <div className="flex gap-3 justify-between items-center">
        <div
          id="search-box"
          className="flex gap-2 w-full border items-center p-4 rounded-lg border-gray-300"
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full border-none outline-none"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div
          className="rounded-full border w-8 h-8 flex items-center justify-center border-gray-400"
          onClick={toogleSearch}
        >
          <i className="fa-solid fa-xmark text-lg cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
