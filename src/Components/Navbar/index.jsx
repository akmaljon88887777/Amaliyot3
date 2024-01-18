import { RiMenuFill } from "react-icons/ri";

import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../App.css";
function Navbars() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(true);

  return (
    <div className="flex w-full bg-[#0C8195] justify-between px-5 lg:px-44">
      <div className="navbar w-full flex justify-between items-center h-[106px]  text-white">
        <h4 className="text-[32px]  font-normal ">
          <Link
            className="flex items-center sm:flex  hover:text-[#F1C111]"
            to={"/"}
          >
            <div className="md:flex sm:flex lg:flex flex items-center gap-2 ">
              <i class="fa fa-line-chart"></i>Ditigel Trend
            </div>
          </Link>
        </h4>
        <div className="lg:hidden flex">
          <div
            className="duration-1000 transition-all absolute  top-[40px] right-5  "
            onClick={() => {
              setOpen(!open);
              setMenu(!menu);
            }}
          >
            {menu ? (
              <button>
                <RiMenuFill color="#fff" fontSize={"30px"} />
              </button>
            ) : (
              <button
                onClick={() => {
                  setMenu(false);
                }}
              >
                <FaTimes color="#fff" fontSize={"30px"} />
              </button>
            )}
          </div>
        </div>

        <div className="mt-[-40px] flex justify-center">
          <div
            className={`w-full flex justify-center m-0 ${
              open ? "h-[240px] w-full p-0 m-0 flex justify-center" : "h-0"
            } overflow-hidden bg-[#0C8195] overflow-x-hidden justify-items-center top-0 mt-[100px] w-full left-0 z-50 absolute duration-300 transition-all flex flex-col items-start  gap-5 `}
          >
            <div className="grid justify-items-center w-full text-center items-center gap-5">
              <Link
                className="font-semibold mt-1 text-[13px] uppercase hover:text-[#F1C111] cursor-pointer ml-[15px]"
                activeClass="active"
                spy
                to="/"
              >
                Studio
              </Link>
              <Link
                className="font-semibold mt-1 text-[13px] uppercase  hover:text-[#F1C111] cursor-pointer ml-[15px]"
                activeClass="active"
                spy
                to="#Carousels"
              >
                Our works
              </Link>
              <Link
                className="font-semibold mt-1 text-[13px] uppercase hover:text-[#F1C111] cursor-pointer  ml-[15px]"
                activeClass="active"
                spy
                to="port"
              >
                Blogs
              </Link>
              <button
                style={{ border: "2px solid #F1C111" }}
                className="w-[116.98px] h-[43.8px] text-[#F1C111] rounded-full text-base"
              >
                <Link to={"/contact"}>Contact</Link>
              </button>
            </div>
          </div>
        </div>

        <div className=" items-center gap-10 hidden lg:flex">
          <a className="hover:text-[#F1C111] cursor-pointer">Studio</a>
          <a href="#Carousels" className="hover:text-[#F1C111] cursor-pointer">
            Our works
          </a>
          <Link to={"/blog"} className="hover:text-[#F1C111]">
            Blog
          </Link>
          <button
            style={{ border: "2px solid #F1C111" }}
            className="w-[116.98px] h-[43.8px] text-[#F1C111] rounded-full text-base hover:bg-[#F1C111] hover:text-white font-bold"
          >
            <Link to={"/contact"}>Contact</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbars;
