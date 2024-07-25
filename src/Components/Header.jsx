import { FaBell } from "react-icons/fa6";
import { IoIosArrowDown, IoMdSearch } from "react-icons/io";
import avatar from "../assets/images/avatarNew.jpg";

const Header = () => {
  return (
    <header className=" p-4 pb-0 flex justify-between items-center">
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search anything..."
            className="pl-2 w-80 focus:w-96 outline-none py-3 transition-all focus:outline-orange-300  placeholder:text-lg rounded-xl"
          />
          <IoMdSearch
            className="absolute right-3 top-1/4 text-gray-500"
            size={30}
          />
        </div>
      </div>
      <div className="flex items-center  space-x-4 ">
        <div className="p-2 relative rounded-md cursor-pointer bg-white">
          <FaBell size={35} />
          <div className="size-5 flex justify-center items-center text-white bg-[#ffa059] rounded-full absolute -top-1 -right-2">
            <span>7</span>
          </div>
        </div>

        <div className="p-1.5 rounded-md flex justify-center items-center gap-2 cursor-pointer bg-white">
          <img src={avatar} alt="User Avatar" className="rounded-lg size-10" />
          <p className="flex font-semibold items-center ">
            Kush Kumar{" "}
            <span className="ml-1">
              {" "}
              <IoIosArrowDown />
            </span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
