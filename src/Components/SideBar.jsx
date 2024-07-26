/* eslint-disable react/prop-types */
import logo from "../assets/images/logo.png";
import { createContext, useContext, useState } from "react";
import { SideBarContext } from "./AppLayout";

// export const SideBarContext = createContext();

const SideBar = ({ children, setExpanded }) => {
  // const [expanded, setExpanded] = useState(false);
  const { expanded } = useContext(SideBarContext);
  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={` py-4 h-[46rem]  mt-9 box-shadow-csm bg-white rounded-3xl transition-all ${
        expanded ? "w-[14rem]" : "w-[5rem]"
      } `}
    >
      <nav className=" gap-[24px] flex flex-col bg-white broder-r ">
        <div className="p-2  flex justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className={`overflow-hidden transition-all size-12 }`}
          />
        </div>

        {/* <SideBarContext.Provider value={{ expanded }}> */}
        <ul className="flex flex-col  px-3 gap-3">{children}</ul>
        {/* </SideBarContext.Provider> */}
      </nav>
    </aside>
  );
};

export default SideBar;
