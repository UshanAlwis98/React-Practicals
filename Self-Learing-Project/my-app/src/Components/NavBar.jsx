import React from "react";

const NavBar = () => {
  return (
    <>
      <div class="flex gap-14">
        <div class="w-64 flex-none bg-blue-500 ">Hello World</div>
        <input
          class="w-64 flex-1e bg-blue-500 rounded-md"
          type="text"
          border
          placeholder="Search..."
        />

        <button class="rounded-full bg-blue-500 w-64 border-2 border-solid border-neutral-500">
          Save Changes
        </button>
      </div>
    </>
  );
};

export default NavBar;
