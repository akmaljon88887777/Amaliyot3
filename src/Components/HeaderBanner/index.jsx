import React from "react";
import Rasm from "../../Assets/office.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function HeaderBanner() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="w-full -mt-32 lg:mt-0 text-xl">
      <div
        data-aos="fade-up"
        className=" w-full mt-40 text-2xl grid justify-items-center"
      >
        <p
          style={{ lineHeight: "1.4" }}
          className="lg:text-[36px] text-[27px] justify-center lg:w-[470px] items-center mt-44 font-medium text-[#212529] px-5 lg:w-full"
        >
          the best
          <span className="text-[#E8B910] p-[2%] font-semibold">
            Digital Marketing agency
          </span>
          in Rio De Janiero
        </p>
        <br />
        <p data-aos="fade-up" className="text-lg  text-[#666262] px-5">
          Total 5 HTML pages are included in this template from TemplateMo
          website. <br /> Please check 2<a href="blog.html">blog</a> pages
          <a href="project-detail.html">project</a> page, and
          <a href="contact.html">contact</a> page.
          <br />
          <br />
          You are <strong className="text-[#F1C111] ">allowed</strong>
          to use this template for commercial or non-commercial <br /> purpose.
          You are NOT allowed to redistribute the template ZIP file on <br />{" "}
          template collection websites.
        </p>
        <br />
      </div>
      <div className="flex justify-center">
        <div data-aos="fade-up">
          <img
            className="md:w-[635px] w-full object-cover "
            src={Rasm}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderBanner;
