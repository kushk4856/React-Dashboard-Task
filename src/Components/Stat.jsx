import { stats } from "../Constants";
import { FaUsers } from "react-icons/fa6";

const Stat = () => {
  return (
    <div className="grid grid-cols-6 gap-4 mb-12 ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white p-4 rounded-xl flex flex-col gap-1 stats-box-shadow "
        >
          <div className="flex justify-between items-center">
            <p className="text-2xl text-[#2c2a73] font-bold">{stat.no}</p>
            {stat.icon && <FaUsers size={32} className="text-[#434188]" />}
          </div>
          <p className="text-[16px] text-[#989898]">{stat.para}</p>
        </div>
      ))}
    </div>
  );
};

export default Stat;
