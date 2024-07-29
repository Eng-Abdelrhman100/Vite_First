// ReviewSlider.js
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { review } from "../constants";



const ReviewSlider = () => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: false,
    draggable: true,
    swipeToSlide: true,
    dots: false,
    pauseOnHover: true,
    responsive: [
        {
          breakpoint: 1024, // Tablet screen size
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768, // Mobile screen size
          settings: {
            slidesToShow: 1,
          },
        },
      ],
  };

  return (
    <div className="relative overflow-hidden">
      <Slider {...settings}>
        {review.map((review) => (
          <div
            className="p-5 text-center shadow-md rounded-lg bg-white mx-2"
            key={review.person}
          >
            <img
              src={review.imgURL}
              alt={review.person}
              className="w-[130px] h-[130px] rounded-full object-cover mb-[10px] mx-auto"
            />
            <h3 className="text-[#333] text-[25px]">{review.person}</h3>
            <p className="text-[#666] text-[15px] py-[10px]">{review.text}</p>
            <div className="flex items-center justify-center gap-1">
              <FaStar size={17} color="#0080ff" />
              <FaStar size={17} color="#0080ff" />
              <FaStar size={17} color="#0080ff" />
              <FaStar size={17} color="#0080ff" />
              <FaStar size={17} color="#ffffff" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
