import React from "react";
import NavLink from "./NavLink";
const MenuOverlay = ({ links }) => {
  return (
  <ul className="flex flex-col py-4 items-center">{links.map((links , index) => ( NavLink href={link.path}))}</ul>
  )
};

export default MenuOverlay;
