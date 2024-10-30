import React, { FC } from "react";
import logo from "../../public/images/mentor.png";
import Image from "next/image";


const Mentor: FC = () => {
  return (
<>
<div className="Mentor-container">
  <div className="Mentor-left">
    <h1 className="Mentor-heading">Reach mentors to

improve your skills</h1>
    <p className="Mentor-desc">Unlock your potential with our industry leading mentor. Gain
skills, insights and support your need to stay ahead in today’s
fast paced world with us </p>
<div className="Mentor-search">
    <input type="text" className="Mentor-input" placeholder="Search domain experts..." />
    <button className="Mentor-button">Search</button>
    </div>

    <p className="Mentor-Popular">Popular</p>
    <div className="Mentor-courses">
      <div className="course">Full Stack Development </div>
      <div className="course">Front end</div>
      <div className="course">Data Science</div>
      <div className="course">UI/UX</div>
    </div>


  </div>
  <div className="Mentor-right">
    <Image src={logo} alt="" />
  </div>
</div>


</>
  );
};
export default Mentor;