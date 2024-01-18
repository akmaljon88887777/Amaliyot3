import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./carousels.css";
import { useNavigate } from "react-router";
import Img1 from "../../Assets/project-image01.jpg";
import Img2 from "../../Assets/project-image02.jpg";
import Img3 from "../../Assets/project-image03.jpg";
import Img4 from "../../Assets/project-image04.jpg";
import Img5 from "../../Assets/project-image05.jpg";
import { Placeholder } from "react-bootstrap";
import { useEffect, useState } from "react";

const data = [
  {
    img: Img1,
    title: "Marketing",
    desc: "Sweet Go Agency",
  },
  {
    img: Img4,
    title: "Website",
    desc: "Smart Ladies",
  },
  {
    img: Img3,
    title: "Branding",
    desc: "Shoes factory",
  },
  {
    img: Img2,
    title: "Race",
    desc: "Bicycle",
  },
  {
    img: Img5,
    title: "Video",
    desc: "Ultimate HealthCare",
  },
];

export default function Carousels() {
  const navigate = useNavigate();
  const handleNext1 = () => {
    navigate("/project");
  };
  return (
    <div className="px-4 h-[100vh] w-full py-[100px] bg-[#F0F8FF] ">
      <h2 class="text-[32px]  text-center  z-50 font-normal" data-aos="fade-up">
        Please take a look through our <br />
        <strong className="text-[#F1C111] font-semibold">
          featured Digital Trends
        </strong>
      </h2>
      <br />
      <br />
      <Swiper
        spaceBetween={-10}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          320: {
            slidesPerView: 1,
          },
          375: {
            slidesPerView: 1,
          },
          425: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {data.map((item) => {
          return (
            <SwiperSlide className=" ">
              <div
                className="salom flex  items-end pb-4 px-6"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  width: "full",
                  height: "395px",
                  display: "flex",
                  justifyContent: "center",
                  marginInline: "15px",
                }}
              >
                <div class=" lg:h-[124px] h-[130px] w-full md:mx-1 sm:mx-auto lg:ml-0 bg-white rounded ">
                  <div className="my-[4%] mx-8">
                    <small className="text-[#909090] font-bold">
                      {item.title}
                    </small>
                    <div className="flex items-center justify-between">
                      <h4 className="text-2xl font-medium text-[#057A8D]">
                        {item.desc}
                      </h4>
                      <button className="w-[40px] h-[40px] bg-[#057A8D] rounded-full">
                        <i class="fa fa-angle-right project-icon text-white text-xl"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
