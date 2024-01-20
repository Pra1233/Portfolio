import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import Flip from "react-reveal/Flip";
const path = process.env.PUBLIC_URL + "/profile.jpeg";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
              <Flip top>
                <img src={path} alt="profile.pic" />
              </Flip>
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
                Energetic Computer Science Graduate, Eager to launch a career in
                Software development. Seeking a technical role to learn,grow,and
                contribute effectively.I am passionate about refining my
                skills,expanding my knowledge,and delivering exceptional results
                in the software industry.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
