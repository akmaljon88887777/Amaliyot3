import { BsFillTelephoneFill } from "react-icons/bs";

import React from "react";
import "./Header.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Rasm from "../../Assets/working-girl.png";
import { useEffect } from "react";
import { useNavigate } from "react-router";
// import { AnimatedOnScroll } from "react-animated-css-onscroll";

function Header() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/contact");
  };
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="header path w-full md:h-[100vh] px-5 lg:h-[83vh] flex flex-col lg:flex-row lg:justify-around items-center ">
      <div className="mt-[50px]  lg:mt-0 lg:ml-20  md:-ml-44">
        <div className="grid justify-start text-start lg:m-0 md:mt-28 ">
          <h1 className="text-white lg:text-[42px] text-[35px] lg:w-[500px] md:w-[500px] font-semibold ">
            We are ready for your digital marketing
          </h1>
          <br />
          <button className="w-[254.85px] h-[56.2px] text-[#057A8D] bg-[#fff] rounded-full text-lg hover:bg-black hover:text-white duration-1000">
            Let us discuss together!
          </button>
        </div>
        <h4 className="flex mx-12 my-4 text-white items-center gap-2">
          <BsFillTelephoneFill color="white" />
          +99 080 070 4224
        </h4>
      </div>
      <div className="">
        <img
          src={Rasm}
          className="w-full md:w-full lg:w-[540px] md:-mt-4 lg:m-0 mt-24 translate-y-10"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
