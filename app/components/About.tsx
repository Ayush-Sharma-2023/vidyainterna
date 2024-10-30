import React, { FC } from "react";
import logo from "../../public/images/aboutus.svg";
import Image from "next/image";

const About: FC = () => {
  return (
    <>
      <div className="About-container">
        <div className="About-left">
          <h1 className="About-heading">About Us</h1>
          <p className="About-desc">At VidyaInterna, we are dedicated
          empowering tech professionals.</p>
          <div className="About-button-container">
          <button className="About-button">More info</button>

          </div>
        </div>

        <div className="About-right">
          <Image src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
