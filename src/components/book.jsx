import Button from "./button";
import { book } from "../assets/images/index";

const Book = () => {
  return (
    <>
      <section className="py-8 px-[9%]" id="book">
        <h1 className=" py-[25px] flex justify-center gap-1 mb-4">
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            B
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            O
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            O
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            K
          </span>
          &nbsp; &nbsp;
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            N
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            O
          </span>
          <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
            W
          </span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 items-center">
          <div className="flex-1 lg:basis-[40rem]">
            <img src={book} alt="book" className="w-full" />
          </div>
          <form className="flex-1 lg:basis-[40rem] py-5 px-8 rounded-lg border shadow-lg">
            <div>
              <h3 className="text-[20px] font-bold py-4 text-[#666]">
                Where To Go
              </h3>
              <input
                type="text"
                className="w-full p-4 border border-black text-[17px] rounded-md"
                aria-label="Destination"
              />
            </div>
            <div>
              <h3 className="text-[20px] font-bold py-4 text-[#666]">
                How Many
              </h3>
              <input
                type="text"
                className="w-full p-4 border border-black text-[17px] rounded-md"
                aria-label="Quantity"
              />
            </div>
            <div>
              <h3 className="text-[20px] font-bold py-4 text-[#666]">
                Arrival
              </h3>
              <input
                type="date"
                className="w-full p-4 border border-black text-[17px] rounded-md"
                aria-label="Arrival"
              />
            </div>
            <div className="mb-4">
              <h3 className="text-[20px] font-bold py-4 text-[#666]">
                Leaving
              </h3>
              <input
                type="date"
                className="w-full p-4 border border-black text-[17px] rounded-md"
                aria-label="Leaving"
              />
            </div>
            <Button label={"Book Now"} BGcolor={"#0080ff"} />
          </form>
        </div>
      </section>
    </>
  );
};

export default Book;
