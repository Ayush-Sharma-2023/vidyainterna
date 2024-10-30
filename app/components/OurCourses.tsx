import React, { FC } from "react";
import Image from "next/image";
import logo from "../../public/images/courses.png"

const OurCourses: FC = () => {
  return <>
  <div className="Courses-container">
    <h1 className="Courses-heading">Our Popular Courses</h1>
    <p className="Courses-desc">Explore our industry aligned courses </p>
    <div className="Course-img-container">
    <Image className="Course-img" src={logo} alt="" />

    </div>


  </div>
  
  
  
  </>;
};

export default OurCourses;
