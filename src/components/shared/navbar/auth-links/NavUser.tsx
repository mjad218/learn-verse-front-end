import React from "react";
import Dropdown from "./Dropdown";
import NavCart from "./NavCart";

const NavUser = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <NavCart />
      <Dropdown />
    </div>
  );
};

export default NavUser;
