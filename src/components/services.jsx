import { FaHotel } from "react-icons/fa";
import { PiForkKnifeFill } from "react-icons/pi";
import { FaBullhorn } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaHiking } from "react-icons/fa";
import { services } from "../constants";


// Define the iconMap to map icon names to their respective components
const iconMap = {
    FaHotel: FaHotel,
    PiForkKnifeFill: PiForkKnifeFill,
    FaBullhorn: FaBullhorn,
    FaGlobeAsia: FaGlobeAsia,
    FaPlane: FaPlane,
    FaHiking: FaHiking
  };


const Services = () => {
    // const IconComponent = iconMap[services.icon]; // Resolve the icon component
  return (
    <section id="services" className="py-8 px-[9%]">
        <h1 className=" py-[25px] flex justify-center gap-1 mb-4">
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            S
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            E
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            R
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            V
          </span>
         
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            I
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            C
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            E
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            S
          </span>
        </h1>

        <div className="flex flex-wrap gap-4">
            {services.map((service) => {
          const IconComponent = iconMap[service.icon]; // Resolve the icon component
          return (
            <div className="flex-1 basis-[300px] rounded-lg p-3 flex flex-col items-center transition-custom hover:shadow-lg" key={service.service}>
              {IconComponent ? <IconComponent size={75} className="p-3 text-[#0080ff] " /> : null} {/* Render the icon component if it exists */}
              <h3 className="mt-2 text-[25px] text-[#333] font-bold">{service.service}</h3>
              <p className="text-[15px] text-[#666] py-[10px]">{service.text}</p>
            </div>
          );
        })}

        </div>

    </section>
  )
}

export default Services