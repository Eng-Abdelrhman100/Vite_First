import { contact } from "../assets/images";
import Button from "./button";

const Contact = () => {
  return (
    <>
      <section id="contact" className="py-8 px-[9%]">
        <h1 className=" py-[25px] flex justify-center gap-1 mb-4">
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            C
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            O
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            N
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            T
          </span>

          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            A
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            C
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            T
          </span>
        </h1>
        <div className="flex flex-wrap gap-[15px] items-center">
          <div className="flex-1 basis-[350px]">
            <img src={contact} alt="contact" className="" loading="lazy"/>
          </div>
          <form className="flex-1 basis-[500px] p-[20px] rounded-lg shadow-md">
            <div className="flex flex-wrap justify-between">
              <input
                type="text"
                placeholder="name"
                className="w-[49%] my-[10px] p-[10px] font-[17px] text-[#333] bg-[#f7f7f7]"
                aria-label="Name"
              />
              <input
                type="email"
                placeholder="email"
                className="w-[49%] my-[10px] p-[10px] font-[17px] text-[#333] bg-[#f7f7f7]"
                aria-label="Email"
              />
            </div>
            <div className="flex flex-wrap justify-between">
              <input
                type="number"
                placeholder="number"
                className="w-[49%] my-[10px] p-[10px] font-[17px] text-[#333] bg-[#f7f7f7]"
              />
              <input
                type="text"
                placeholder="subject"
                className="w-[49%] my-[10px] p-[10px] font-[17px] text-[#333] bg-[#f7f7f7]"
                aria-label="Subject"
              />
            </div>
            <textarea
              cols={30}
              rows={10}
              placeholder="message"
              className="h-[150px] w-full my-[10px] p-[10px] font-[17px] text-[#333] bg-[#f7f7f7]"
            ></textarea>
            <div className="mx-auto"><Button label="send message" BGcolor="#0080ff" /></div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
