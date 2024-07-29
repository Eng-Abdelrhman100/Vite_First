
const Button = ({label, BGcolor}) => {
  return (
    <>  
    <button className={`py-[0.8rem] px-12 cursor-pointer text-[17px]  inline-block  text-white hover:bg-[#0066cc] rounded-lg transition-custom`}
    style={{ backgroundColor: BGcolor }}>{label}</button>

    </>
  )
}

export default Button