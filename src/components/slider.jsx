import React, { useState } from 'react';
import { sliderVids } from "../constants";
import Button from "./button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"; // Import icons

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderVids.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderVids.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative mt-[116px] min-h-screen flex items-center justify-center" id="home">
      {/* Video Slider */}
      <video
        src={sliderVids[currentIndex].vidURL}
        className="absolute top-0 left-0 h-full w-full object-cover z-[-1]"
        autoPlay
        muted
        loop
      ></video>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12">
        <h3 className="text-white text-[25px] sm:text-[35px] md:text-[40px] lg:text-[45px] whitespace-nowrap">WORLD WIDE MAKE TRAVEL EASY</h3>
        <p className="text-white text-[16px] sm:text-[22px] md:text-[25px] lg:text-[25px] py-2">
          Discover New Places With Us, Adventure Awaits
        </p>
        <a href="#">
          <Button label="Discover More" BGcolor={"bg-[rgba(255,165,0,0.2)]"}/>
        </a>
      </div>

      {/* Prev and Next Buttons */}
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2  text-white opacity-30 hover:opacity-75 transition-opacity "
        onClick={handlePrev}
      >
        <IoIosArrowBack size={60}/>
      </button>
      <button
        className="absolute top-1/2 right-0   transform -translate-y-1/2 p-2  text-white opacity-30 hover:opacity-75 transition-opacity"
        onClick={handleNext}
      >
        <IoIosArrowForward size={60} />
      </button>
    </section>
  );
};

export default Slider;
