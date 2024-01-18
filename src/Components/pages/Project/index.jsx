import React from "react";
import Rasm from "../../../Assets/interview-process.jpg";
import Rasm2 from "../../../Assets/personal-website.png";
import Rasm3 from "../../../Assets/male-avatar.png";
import Rasm4 from "../../../Assets/Screenshot 2024-01-15 154125.png";
function Project() {
  return (
    <div>
      <div className="grid justify-items-center my-28 mb-[14%]">
        <div className="text-center">
          <h4 className="text-[#909090] font-normal text-lg">
            Digital Marketing Agenc
          </h4>
          <h1 className="text-[42px] font-medium">
            127+ Duis sollicitudin urna id elit pulvinar <br /> placerat
          </h1>
          <div className="mt-20">
            <img src={Rasm} alt="" />
          </div>
        </div>
        <div className="flex justify-center gap-10 items-center mt-32">
          <div>
            <img className="w-[540px] h-[425.91px]" src={Rasm2} alt="" />
          </div>
          <div>
            <h2 className="text-[32px] font-semibold">
              Pellentesque pretium <br /> interdum
            </h2>
            <p className="text-[18px] text-[#666262] mt-[6%]">
              Nunc sapien nulla, interdum at diam non, aliquam <br /> vestibulum
              leo. Fusce laoreet malesuada ante, <br /> consectetur consequat.
            </p>
            <br />
            <div className="grid gap-2">
              <p className="flex gap-2.5 items-center text-[#35383B]">
                <img src={Rasm4} className="w-[14px] h-[14px]" alt="" />
                Curabitur commodo a sapien non
              </p>
              <p className="flex gap-2.5 items-center text-[#35383B]">
                <img src={Rasm4} className="w-[14px] h-[14px]" alt="" />
                Sed facilisis convallis turpis
              </p>
              <p className="flex gap-2.5 items-center text-[#35383B]">
                <img src={Rasm4} className="w-[14px] h-[14px]" alt="" />
                Quisque placerat augue neque
              </p>
              <p className="flex gap-2.5 items-center text-[#35383B]">
                <img src={Rasm4} className="w-[14px] h-[14px]" alt="" />
                Nullam fringilla arcu a tortor
              </p>
            </div>
          </div>
        </div>
        <div className="mt-32">
          <iframe
            src="https://www.youtube.com/embed/VLZMBkh8j80"
            width="1080px"
            height="704px"
            frameborder="0"
            allowFullScreen
            allow="encrypted,picture-in-picture"
          ></iframe>
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="grid justify-center">
          <h4 className="text-[24px] font-semibold">
            Curabitur egestas mollis tellus sit amet porttitor. Sed leo nisl,
            posuere at <br /> molestie ac, suscipit auctor mauris. Etiam quis
            metus elementum, <br /> tempor risus vel.
          </h4>
          <br />
          <div className="flex gap-4 items-center">
            <img className="w-[100px] h-[91px]" src={Rasm3} alt="" srcset="" />
            <p className="text-lg text-[#666262]">
              Angelo Sharp, Creative Director
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
