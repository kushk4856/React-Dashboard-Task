/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { SideBarContext } from "./AppLayout";
import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const SidebarItem = ({ icon, text, active, alert }) => {
  const { expanded, setExpanded } = useContext(SideBarContext);
  return (
    <NavLink to={`/${text.toLowerCase()}`}>
      <li
        onClick={() => setExpanded((c) => !c)}
        className={`relative group flex justify-center items-center py-2 px-3 my-1 font-medium rounded-2xl cursor-pointer transition-colors ${
          active
            ? "bg-[#2c2a73] to-indigo-100 text-white"
            : "hover:bg-[#2c2a73] hover:text-white  "
        }`}
      >
        <span className={`overflow-hidden  w-32`}>{text}</span>
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
