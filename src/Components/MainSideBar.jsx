/* eslint-disable react/prop-types */
import { MdSpaceDashboard, MdVideoChat } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaBagShopping, FaBuilding, FaUserDoctor } from "react-icons/fa6";
import { FaPenSquare } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import SideBar from "./SideBar";
import SidebarItem from "./SidebarItem";

const MainSideBar = ({ type, setExpanded }) => {
  return (
    <SideBar type={type} setExpanded={setExpanded}>
      <SidebarItem
        type={type}
        icon={<MdSpaceDashboard size={38} />}
        text="Dashboard"
        active
      />
      <SidebarItem type={type} icon={<IoIosPeople size={38} />} text="Staff" />
      <SidebarItem
        type={type}
        icon={<FaUserDoctor size={38} />}
        text="Doctors"
      />
      <SidebarItem
        type={type}
        icon={<FaBagShopping size={38} />}
        text="Services"
      />
      <SidebarItem
        type={type}
        icon={<MdVideoChat size={38} />}
        text="Appointments"
      />
      <SidebarItem
        type={type}
        icon={<FaPenSquare size={38} />}
        text="Content"
      />
      <SidebarItem
        type={type}
        icon={<IoStatsChartSharp size={38} />}
        text="Stats"
      />
      <SidebarItem
        type={type}
        icon={<FaBuilding size={38} />}
        text="Organization"
      />
    </SideBar>
  );
};

export default MainSideBar;
