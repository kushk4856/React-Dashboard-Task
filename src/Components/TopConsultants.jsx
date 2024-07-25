import { FaEye } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { consultants } from "../Constants";
const TopConsultants = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Top<span className="text-[#ffa059]"> 5 Consultants Picks</span> by
          Users
        </h2>
        <button className="text-orange-500 text-sm flex items-center gap-3 border p-2 rounded-md border-orange-200">
          See All{" "}
          <span>
            <FaArrowUpRightFromSquare />
          </span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#fee3d1] rounded-lg">
              <th className="px-3 py-2 text-left text-[16px] font-semibold text-black rounded-tl-lg">
                Sr. No
              </th>
              <th className="px-3 py-2 text-left text-[16px] font-semibold text-black">
                Therapist Name
              </th>
              <th className="px-3 py-2 text-left text-[16px] font-semibold text-black">
                Times
              </th>
              <th className="px-3 py-2 text-left text-[16px] font-semibold text-black rounded-tr-lg">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {consultants.map((consultant, index) => (
              <tr
                key={consultant.id}
                className="border-b border-orange-100 last:border-b-0"
              >
                <td className="px-3 py-2 text-[16px] font-semibold text-[#999898]">
                  {index + 1}.
                </td>
                <td className="px-3 py-2 text-[16px] font-semibold text-[#999898]">
                  {consultant.name}
                </td>
                <td className="px-3 py-2 text-[16px] font-semibold text-[#999898]">
                  {consultant.times}
                </td>
                <td className="px-3 py-2 pl-6">
                  <button className="bg-orange-100 rounded-md p-1 hover:bg-orange-200">
                    <FaEye size={25} className="text-orange-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopConsultants;
