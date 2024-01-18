import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { BsBehance, BsDribbble, BsFillTelephoneFill } from "react-icons/bs";
import "../../App.css";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaHome } from "react-icons/fa";

function Footer() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className=" bg-[#171819] w-full h-[1100px] md:px-[50px] lg:px-60 grid grid-cols-1 md:grid-cols-2 flex-wrap lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 items-center lg:w-full lg:h-[75vh] py-20 lg:justify-items-center sm:justify-items-start pl-4  mt-20 ">
      <div
        style={{ lineHeight: "1.2" }}
        className="flex text-[2em] font-semibold text-[#fff] text-start"
      >
        <h1
          class="text-white text-[42px] mx-auto text-start"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We make creative <br />
          <strong className="text-[#F1C111] font-semibold">brands</strong> only.
        </h1>
      </div>
      <div className="lg:ml-36 ">
        <h4
          data-aos="fade-up"
          data-aos-delay="100"
          className="uppercase text-[18px] text-[#848484]"
        >
          Contact info
        </h4>
        <br />
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[18px] text-[#666262] flex gap-2 items-center "
        >
          <BsFillTelephoneFill color="#F1C111" />
          +99 080 070 4224
        </div>
        <h4
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-[18px] text-[#666262] flex gap-2 items-center"
        >
          <GrMail color="#F1C111" />
          hello company.com
        </h4>
      </div>
      <div>
        <h4
          data-aos="fade-up"
          data-aos-delay="100"
          className="uppercase text-[18px] text-[#848484]"
        >
          Our Studio
        </h4>
        <br />
        {/* <div className="text-[18px] text-[#666262] flex gap-2 text-start items-start justify-center">
          <FaHome color="#F1C111" /> Av. Lúcio Costa - Barra da <br /> Tijuca,
          Rio de Janeiro - RJ,
          <br /> Brazil
        </div> */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          class="mb-1 text-[#666262] gap-2"
        >
          <i class="fa fa-home  text-[#F1C111]  mr-2 footer-icon"></i>
          Av. Lúcio Costa - Barra da <br /> Tijuca, Rio de Janeiro - RJ,
          <br /> Brazil
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="lg:text-center text-lg text-[#666262]"
      >
        Copyright © 2020 Your Company <br /> Design: TemplateMo
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex gap-4 text-start justify-start lg:justify-center lg:text-center"
      >
        <li type="none" className="text-base text-[#666262]">
          Stories
        </li>
        <li type="none" className="text-base text-[#666262]">
          Work with us
        </li>
        <li type="none" className="text-base text-[#666262]">
          Privacy
        </li>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="gap-5 flex cursor-pointer hover:text-[#F1C111]"
      >
        <BsInstagram color="#666262" />
        <AiOutlineTwitter color="#666262" />
        <BsDribbble color="#666262" />
        <BsBehance color="#666262" />
      </div>
    </div>
  );
}

export default Footer;
