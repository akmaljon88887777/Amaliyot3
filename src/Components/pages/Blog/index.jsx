import React, { useEffect } from "react";
import "../../../App.css";
import Rasm1 from "../../../Assets/blog-sidebar-image.jpg";
import Rasm2 from "../../../Assets/blog-sidebar-image01.jpg";
import Rasm3 from "../../../Assets/blog-sidebar-image02.jpg";
import Forms from "./Forms";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../../App.css";
import { useNavigate } from "react-router";
function Blog() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/blogdetail");
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="grid mt-[8%] justify-center items-items-center w-full my-20">
        <h1
          data-aos="fade-up"
          className="text-center items-center flex justify-center text-[42px] font-normal"
        >
          Digital Trend Blog
        </h1>
        <br />
        <div className="flex justify-start gap-4 mt-5">
          <div data-aos="fade-up" className="imgs11"></div>
          <div className="">
            <div className="flex gap-8" data-aos="fade-up">
              <img
                className="w-[159px] h-[106px] rounded-md"
                src={Rasm1}
                alt=""
              />
              <div data-aos="fade-up">
                <h4 className="font-medium text-lg text-[#DC3545]">Design</h4>
                <p
                  onClick={() => handleNext()}
                  className="text-lg cursor-pointer hover:text-[#F1C111]"
                >
                  Why Truly Accessible Design <br /> Benefits Everyone
                </p>
              </div>
            </div>
            <div className="flex gap-3 my-3">
              <img
                data-aos="fade-up"
                className="w-[159px] h-[106px] rounded-md"
                src={Rasm2}
                alt=""
              />
              <div data-aos="fade-up">
                <h4 className="font-medium text-lg text-[#28A745]">
                  LIFESTYLE
                </h4>
                <p
                  onClick={() => handleNext()}
                  className="text-lg cursor-pointer hover:text-[#F1C111]"
                >
                  Be Humble About What You <br /> Know
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <img
                data-aos="fade-up"
                className="w-[159px] h-[106px] rounded-md"
                src={Rasm3}
                alt=""
              />
              <div data-aos="fade-up">
                <h4 className="font-medium text-lg text-[#007BFF]">CODING</h4>
                <p
                  onClick={() => handleNext()}
                  className="text-lg cursor-pointer hover:text-[#F1C111]"
                >
                  The Mistakes I Made As a <br /> Coding Beginner
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <Forms />
      </div>
    </div>
  );
}

export default Blog;
