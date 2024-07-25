/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { SideBarContext } from "./SideBar";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const SidebarItem = ({ icon, text, active, alert }) => {
  const { expanded } = useContext(SideBarContext);
  return (
    <NavLink to={`/${text.toLowerCase()}`}>
      <li
        className={`relative group flex justify-center items-center py-2 px-3 my-1 font-medium rounded-2xl cursor-pointer transition-colors ${
          active
            ? "bg-[#2c2a73] to-indigo-100 text-white"
            : "hover:bg-[#2c2a73] hover:text-white  "
        }`}
      >
        <span className={`overflow-hidden  ${expanded ? "w-32" : "w-0"}`}>
          {text}
        </span>
        <div
          className={`${
            active ? "text-white" : "text-[#2c2a73] group-hover:text-white"
          }`}
        >
          {icon}
        </div>
      </li>
    </NavLink>
  );
};

export default SidebarItem;
