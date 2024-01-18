import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
function Contact() {
  const [name, setName] = React.useState("Cat in the Hat");
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="justify-items-center grid ">
      <div className="grid justify-center lg:w-full lg:h-[100vh] w-[100%] h-[100vh]">
        <div className="grid items-center justify-center mt-24 text-center">
          <h1
            style={{ lineHeight: "1.2" }}
            class="mb-4 text-[42px] font-medium w-[#]"
          >
            Hey there, Let's <strong className="text-[#F1C111]">talk</strong>{" "}
            about <br />
            <strong className="text-[#F1C111]">creative</strong> projects
          </h1>
          <br />
          <p className="text-lg text-[#404040]">
            or email us at{" "}
            <a
              style={{ textDecoration: "none" }}
              className="text-black"
              href="mailto:hello@company.com"
            >
              hello@company.com
            </a>
          </p>
          <p className="text-lg text-[#404040]">
            Please follow our contact page to{" "}
            <strong className="text-[#F1C111] font-normal">setup</strong> the
            contact form.
          </p>
        </div>
        <div className=" grid mt-20 justify-items-center">
          <Box
            component="form"
            sx={{
              m: 1,
              width: "40%",
              justifyItems: "center",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              style={{ width: "800px" }}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              style={{ width: "800px" }}
              variant="outlined"
            />
          </Box>
          <br />
          <div className="grid justify-items-center py-2">
            <textarea
              className="w-[730px] h-[127px] px-3 py-5 bg-[#F0F8FF]"
              name=""
              placeholder="message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <br />
            <br />
            <button className="w-[286.66px] h-[54px] bg-[#057A8D] rounded-full text-white text-lg">
              Send Message
            </button>
          </div>
        </div>
      </div>
      <br />
      <div
        data-aos="zoom-in"
        className="lg:w-full flex items-center mt-20 sm:w-96"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.990980646774!2d71.26316257529027!3d40.37438685821654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bbab8025bced7d%3A0xc22cdf6b8ee85751!2sCodemy!5e1!3m2!1sru!2s!4v1704916573230!5m2!1sru!2s"
          width="100%"
          height="600"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
