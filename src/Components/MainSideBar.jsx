import { MdSpaceDashboard, MdVideoChat } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { FaBagShopping, FaBuilding, FaUserDoctor } from "react-icons/fa6";
import { FaPenSquare } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import SideBar from "./SideBar";
import SidebarItem from "./SidebarItem";

const MainSideBar = () => {
  return (
    <SideBar>
      <SidebarItem
        icon={<MdSpaceDashboard size={38} />}
        text="Dashboard"
        active
      />
      <SidebarItem icon={<IoIosPeople size={38} />} text="Staff" />
      <SidebarItem icon={<FaUserDoctor size={38} />} text="Doctors" />
      <SidebarItem icon={<FaBagShopping size={38} />} text="Services" />
      <SidebarItem icon={<MdVideoChat size={38} />} text="Appointments" />
      <SidebarItem icon={<FaPenSquare size={38} />} text="Content" />
      <SidebarItem icon={<IoStatsChartSharp size={38} />} text="Stats" />
      <SidebarItem icon={<FaBuilding size={38} />} text="Organization" />
    </SideBar>
  );
};

export default MainSideBar;
