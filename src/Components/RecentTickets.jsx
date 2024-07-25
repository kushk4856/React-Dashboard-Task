/* eslint-disable react/prop-types */
// import { ChevronRight } from "lucide-react";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { tickets } from "../Constants";

const TicketItem = ({ name, imageUrl, date, time, description }) => (
  <div className="flex items-start space-x-4 py-2 border-b border-orange-100 last:border-b-0">
    <img src={imageUrl} alt={name} className="w-10 h-10 rounded-full" />
    <div className="flex-grow">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold text-[16px]">{name}</p>
          <p className="text-sm font-semibold text-orange-400">
            My Payment Done Appointment Cancelled by Doctor
          </p>
        </div>
        <p className="text-xs font-semibold text-[#434188] ">
          {date}, {time}
        </p>
      </div>
      <p className="text-sm text-[#9b9b9b] font-semibold mt-1">{description}</p>
    </div>
  </div>
);

const RecentTickets = () => {
  return (
    <div className="bg-white rounded-lg  overflow-hidden shadow p-6 pr-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">
          Recent <span className="text-[#ffa059]">Tickets</span>
        </h2>
        <button className="text-orange-500 text-sm flex items-center gap-3 border p-2 rounded-md border-orange-200">
          See All{" "}
          <span>
            <FaArrowUpRightFromSquare />
          </span>
        </button>
      </div>
      <div className="space-y-1 pr-4  overflow-y-scroll h-[18.5rem] content-pack ">
        {tickets.map((ticket, index) => (
          <TicketItem key={index} {...ticket} />
        ))}
      </div>
    </div>
  );
};

export default RecentTickets;
