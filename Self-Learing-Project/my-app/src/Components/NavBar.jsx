import React from "react";

const NavBar = () => {
  return (
    <>
      <div class="flex">
        <div class="w-64 flex-none bg-blue-500 ">Hello World</div>
        <input
          class="w-64 flex-1e bg-blue-500"
          type="text"
          border
          placeholder="Search..."
        />
      </div>
    </>
  );
};

export default NavBar;
