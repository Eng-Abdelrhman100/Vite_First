
import ReviewSlider from "./reviewslide"
const Reviews = () => {
  return (
    <>
        <section className="py-8 px-[9%]" id="review">
            <h1 className=" py-[25px] flex justify-center gap-1 mb-4">
             <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
               R
             </span>
             <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
               E
             </span>
             <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
               V
             </span>
             <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
               I
             </span>

             <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
               E
             </span>
             <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
               W
             </span>
             <span className="text-[35px] font-bold bg-[#0080ff] text-white rounded-lg py-[2.5px] px-[10px]">
               S
             </span>
            </h1>
            <ReviewSlider />
        </section>
    </>
  )
}

export default Reviews