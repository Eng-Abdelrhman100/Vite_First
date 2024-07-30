import React from "react";
import { gallery } from "../constants";
import Button from "./button";
const Gallery = () => {
  return (
    <>
      <section id="gallery" className="py-8 px-[9%]">
        <h1 className=" py-[25px] flex justify-center gap-1 mb-4">
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            G
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            A
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            L
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            L
          </span>

          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            E
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            R
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            Y
          </span>
        </h1>
        <div className="flex flex-wrap gap-4">
          {gallery.map((item) => (
            <div
              key={item.imgURL}
              className="overflow-hidden flex-1 basis-[300px] h-[250px] rounded-lg border border-white shadow-md relative group"
            >
              <img
                src={item.imgURL}
                alt={item.header}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 text-center bg-[rgba(0,0,0,0.7)] py-[50px] px-[20px] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                <h3 className="text-[25px] text-[#0080ff]">{item.header}</h3>
                <p className="text-[15px] text-white py-[5px] mb-2">{item.text}</p>
                <Button label="See more" BGcolor={"#0080ff"}/>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery;
