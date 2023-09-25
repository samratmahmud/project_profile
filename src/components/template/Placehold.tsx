import React from "react";

function Placehold() {
  return (
    <div className="flex flex-row-reverse ">
      <input
        id="search"
        className="placeholder:text-xl placeholder:text-zinc-500 placeholder:font-medium pr-5 focus:outline-none w-full border focus:border-slate-500 border-black-300 border-l-0 rounded-r-full peer"
        type="text"
        placeholder="Search..."
        autoComplete="off"
      />
      <label
        htmlFor="search"
        className="p-3 flex-shrink-0 border border-green border-black-300 border-r-0 rounded-l-full peer-focus:border-slate-500"
      >
        <img className="cursor-pointer" src="./charm_search.png" alt="" />
      </label>
    </div>
  );
}

export default Placehold;
