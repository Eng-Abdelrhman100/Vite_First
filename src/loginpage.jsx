import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <section className=" bg-[#eef2f5] flex items-center justify-center h-screen rounded-[4px] shadow-sm">
        <div className="bg-white flex flex-col  py-[45px] px-14 max-md:px-10 max-sm:px-3 max-sm:py-4">
          <h1 className="text-[#292929] font-bold text-[30px] mb-3">
            Start Your Journey – Log In
          </h1>
          <p className="text-[#545454] text-[18px] mb-6">
            Choose one of the option to go
          </p>
          <form className="flex flex-col gap-4 mb-12  ">
            <input
              type="email"
              placeholder="Email"
              className="py-6 pl-9 border border-[#e6e6e6] rounded-[10px] text-[#4f4f4f] "
            />
            <input
              type="password"
              placeholder="Password"
              className="py-6 pl-9 border border-[#e6e6e6] rounded-[10px] "
            />
          </form>
          <p className="text-[#4f4f4f] mb-9 text-left">Or continue with</p>
          <div className="flex items-center gap-5 mb-12 cursor-pointer">
            <div className="py-3 px-10 bg-[hsl(0,0%,97%)] rounded-[4px] flex items-center justify-center transition-custom hover:bg-[hsl(0,0%,92%)]">
              <FcGoogle size={45} />
            </div>
            <div className="py-3 px-10 bg-[hsl(0,0%,97%)] rounded-[4px] flex items-center justify-center transition-custom hover:bg-[hsl(0,0%,92%)]">
              <FaFacebook size={45} color="blue" />
            </div>
            <div className="py-3 px-10 bg-[hsl(0,0%,97%)] rounded-[4px] flex items-center justify-center transition-custom hover:bg-[hsl(0,0%,92%)]">
              <FaApple size={45} />
            </div>
          </div>
          <Link to="/">
            <button className="py-5 px-[133px] bg-[hsl(216,100%,51%)] text-white rounded-[8px] mx-12 transition-custom hover:bg-[hsl(216,100%,46%)]">
              Log in
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
