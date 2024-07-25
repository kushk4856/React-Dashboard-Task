import { useState } from "react";
import MentalSupportCard from "./MentalSupportCard";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { cards } from "../Constants";

const MentalSupportSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (cards.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length / 3) % (cards.length / 3)
    );
  };

  return (
    <div className="relative  mx-auto px-4">
      <div className="overflow-hidden px-3">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: cards.length / 3 }).map((_, slideIndex) => (
            <div key={slideIndex} className="flex-shrink-0 w-full flex gap-4">
              {cards
                .slice(slideIndex * 3, slideIndex * 3 + 3)
                .map((card, index) => (
                  <div key={index} className="w-1/3">
                    <MentalSupportCard {...card} />
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#fca25e] text-white rounded-full p-2 shadow-md"
      >
        <MdKeyboardArrowLeft className="w-6 h-6 " />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#fca25e] text-white rounded-full p-2 shadow-md"
      >
        <MdKeyboardArrowRight className="w-6 h-6 " />
      </button>
    </div>
  );
};

export default MentalSupportSlider;
