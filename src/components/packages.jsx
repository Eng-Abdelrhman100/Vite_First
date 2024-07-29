import { packages } from "../constants/index";
import { HiLocationMarker } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
import Button from "./button";

const Packages = () => {
  return (
    <>
      <section id="package" className="py-8 px-[9%]">
        <h1 className="py-[25px] flex justify-center gap-1 mb-4">
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            P
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            A
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            C
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            K
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            A
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            G
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            E
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            S
          </span>
        </h1>
        <div className="flex flex-wrap gap-[20px]">
          {packages.map((item) => (
            <div
              className="flex-1 basis-[20rem] rounded-lg shadow-md overflow-hidden"
              key={item.label}
            >
              <img
                src={item.imgURL}
                alt={item.label}
                className="h-[250px] w-full object-cover"
              />
              <div className="p-[20px]">
                <div className="flex items-center gap-2">
                  <HiLocationMarker size={25} color="#0080ff" />
                  <h3 className="text-[20px] text-[#333]">{item.label}</h3>
                </div>
                <p className="text-[17px] text-[#666] py-1 mb-2">{item.text}</p>
                <div className="flex items-center gap-1  ">
                <FaStar size={17} color="#0080ff" />
                <FaStar size={17} color="#0080ff" />
                <FaStar size={17} color="#0080ff" />
                <FaStar size={17} color="#0080ff" />
                <FaStar size={17} color="#ffffff" />
              </div>
              <div className="text-[20px] text-[#333] pt-[10px] ">
                $90.00{" "}
                <span className="text-[15px] text-[#666] line-through">
                  $120.00
                </span>
              </div>
              <div className=" py-3">
                <a href="#">
                  <Button label="Check Now" BGcolor="#0080ff" />
                </a>
              </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Packages;
