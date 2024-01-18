import React from "react";
import Header from "../../Header/index";
import HeaderBanner from "../../HeaderBanner/index";
import FooterBanner from "../../FooterBanner/index";
import Carousels from "../../Carousels";
import Rasm1 from "../../../Assets/project-image01.jpg";
import Rasm2 from "../../../Assets/project-image02.jpg";
import Rasm3 from "../../../Assets/project-image03.jpg";
import Rasm4 from "../../../Assets/project-image04.jpg";
function Home() {
  return (
    <div className="">
      <Header />
      <HeaderBanner />
      <div></div>

      <div className="">
        <Carousels />
      </div>
      <FooterBanner />
    </div>
  );
}

export default Home;
