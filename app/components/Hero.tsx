import React, { FC } from "react";
import logo from "../../public/images/img circle top.png";
import Image from "next/image";

const Hero: FC = () => {
  return (
    <>
      <div className="Home-container">
        <div className="Home-left">
          <div className="Hero-heading">
            <p>
              <span className="Home-head1">Empowering </span>
              <span className="Home-head2">the tech </span>
              <span className="Home-head3">Innovators</span>
              </p>
          </div>
          <div className="Hero-subHeading">
            <p>”learn grow and innovate with the guidance of experts“</p>
          </div>
          <div className="Hero-desc">
            <p>
              A mission to bridge the gap between academia by providing hands-on
              experience,industry-relevant skills, professional mentorship with
              us!!!
            </p>
          </div>
          <button className="Home-Start-button">Get Started</button>
          <div className="Hero-email">
            <input type="email" placeholder="enter your email" />
            <button>Sign up</button>
          </div>
          {/* <p className="Hero-Learn"> <span className="Hero-exclaim">!</span> Learn more about our platform with us</p> */}
          <p className="Hero-Learn"> ! Learn more about our platform with us</p>
        </div>

        <div className="Home-right">
          <Image src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
