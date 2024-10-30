import React, { FC } from "react";

const WhyUs: FC = () => {
  return (
    <>
      <div className="WhyUs-container">
        <h1 className="WhyUs-heading">Why choose us?</h1>
        <div className="square-container">
          <div className="row row1">
            <div className="square square1">
              <h1 className="square-heading">500+ Successful Internships</h1>
              <p className="square-desc">Proven track record with hundreds of interns
              completing real-world projects</p>
            </div>
            <div className="square square2">
              <h1 className="square-heading">80% Job Placement Rate</h1>
              <p className="square-desc">High success rate in helping interns secure
              jobs in top tech companies. </p>
            </div>
          </div>

          <div className="row row2">
            <div className="square square3">
              <h1 className="square-heading">Mentorship from Experts</h1>
              <p className="square-desc">Learn directly from 50+ professionals currently 
              working in the tech industry</p>
            </div>
            <div className="square square4">
              <h1 className="square-heading">Global Reach</h1>
              <p className="square-desc">Join a community of learners from over 30
              countries and build a network</p>
            </div>
          </div>

          <div className="row row3">
            <div className="square square5">
              <h1 className="square-heading">Hands-on Experience</h1>
              <p className="square-desc">Work on 1000+ real-world projects to build your
              technical and problem-solving skills.</p>
            </div>
            <div className="square square6">
              <h1 className="square-heading">Flexible and Remote </h1>
              <p className="square-desc">Learn and grow at your own place from 
              anywhere in the world</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
