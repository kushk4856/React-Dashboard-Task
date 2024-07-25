/* eslint-disable react/prop-types */
import { FaPenToSquare } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";
import cardImg from "../assets/images/consultant.jpeg";

const MentalSupportCard = ({ title, date, author, content }) => {
  return (
    <div className="max-w-md  mx-1 bg-white rounded-xl overflow-hidden shadow-lg">
      <div className="p-4">
        <div className="bg-cyan-500 rounded-lg p-4 mb-4">
          <img src={cardImg} alt="" />
        </div>
        <h2 className="text-xl font-semibold mb-2 text-[#312D6b]">{title}</h2>
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <MdDateRange className="w-4 h-4 mr-1 text-[#e3a272]" />
          <span className="text-[#727272]">{date}</span>
          <FaPenToSquare className="w-4 h-4 ml-4 mr-1 text-[#e3a272]" />
          <span className="text-[#727272]">{author}</span>
        </div>
        <p className="text-[#727272] font-normal">{content}</p>
      </div>
    </div>
  );
};

export default MentalSupportCard;
