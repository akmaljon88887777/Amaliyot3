import React from "react";
import Rasm from "../../Assets/female-avatar.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../../App.css";
function FooterBanner() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex w-full h-[95vh] md:h-[60vh] mx-auto mb-[284px] lg:px-28 lg:w-full lg:gap-0 lg:justify-center lg:flex justify-center lg:items-center my-32 lg:my-0 items-center grid-cols-1 flex-col  md:flex-row lg:flex-row">
      <div>
        <div data-aos="fade-up" className=" lg:mt-0 md:-mt-36">
          <img
            className="w-[300px] object-cover md:object-cover md:w-[300px] lg:w-[540px]"
            src={Rasm}
            alt=""
          />
        </div>
      </div>
      <div className=" mx-auto lg:text-start mt-20 lg:mx-10 px-3 text-start">
        <div data-aos="fade-up">
          <h4 className="text-[#9A9A9A] text-lg font-medium mb-[12%]">
            CLIENT TESTIMONIALS
          </h4>
        </div>
        <div data-aos="fade-up">
          <h4
            style={{ fontSize: "32px", lineHeight: "1.6" }}
            className=" text-[#212529] font-semibold text-start"
          >
            Lorem ipsum Sed eiusmod esse <br /> aliqua sed incididunt aliqua
            <br /> incididunt mollit id et sit proident <br /> dolor nulla sed
            commodo.
          </h4>
        </div>
        <br />
        <div>
          <div
            style={{ lineHeight: "1.2" }}
            className="flex text-lg gap-2 ml-5 lg:m-0"
            data-aos="fade-up"
          >
            <h4 className="text-[#F1C111] text-lg selection:bg-[#F1C111]">
              Mary Zoe
            </h4>
            <h4 className="text-[#666262] text-lg">/</h4>
            <h4 className="text-[#666262] text-lg">Digital Agency (CEO)</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterBanner;
