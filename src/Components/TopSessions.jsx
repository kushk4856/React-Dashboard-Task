import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { sessions } from "../Constants";

const TopSessions = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Top <span className="text-[#ffa059]">5 Session Picks</span> by Users
        </h2>
        <button className="text-orange-500 text-sm flex items-center gap-3 border p-2 rounded-md border-orange-100">
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
                Service Name
              </th>
              <th className="px-3 py-2 text-left text-[16px] font-semibold text-black">
                Counts
              </th>
              <th className="px-3 py-2 text-left text-[16px] font-semibold text-black rounded-tr-lg">
                Revenue
              </th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr
                key={session.id}
                className="border-b border-orange-100 last:border-b-0"
              >
                <td className="px-3 py-2 text-[16px] font-semibold text-[#999898]">
                  {index + 1}.
                </td>
                <td className="px-3 py-2 text-[16px] font-semibold text-[#999898]">
                  {session.name}
                </td>
                <td className="px-3 py-2 text-[16px] font-semibold text-[#999898]">
                  {session.counts}
                </td>
                <td className="px-3 py-2 text-[16px] font-semibold text-[#999898]">
                  {session.revenue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSessions;
