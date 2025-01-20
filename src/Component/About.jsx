import React from "react";
import "./About.css";
import theme_pattern from "../asset/theme_pattern.svg";
import profile from '../Component/profiles.jpg'

const About = () => {
  return (
    <div id="About" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-section-left">
          <img src={profile} alt="" />
        </div>

        <div className="about-right">
          <div className="para">
            <p>
              I am an experience front-end & backend developer with over a year
              of professional expertise in these field. throught my carrer,I
              have had the privilage of collaboration prestigious organization
            </p>

            <p>
              {" "}
              my passion for frontend developerment in not only reflection in my
              extensive experience but also in enthusium I bring to each project
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Html & Css </p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React.Js </p> <hr style={{ width: "55%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p> <hr style={{ width: "40%" }} />
            </div> <div className="about-skill">
              <p>Sql</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p> <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Django</p> <hr style={{ width: "60%" }} />
            </div>
             </div>
             

            
        </div>
        
        
      </div>
      <div className="about-achivements">
              <div className="about-achivement">
                <h1>1+</h1>
                <p>YEAR OF EXPERIRNCE</p>
              </div>
              <hr />
              <div className="about-achivement">
                <h1>10+</h1>
                <p>PROJECT COMPLETED</p>
              </div>
              <hr />
              <div className="about-achivement">
                <h1>5+</h1>
                <p>HAPPY CLIENTS</p>
              </div>
              <hr />
                </div>
    </div>
  );
};

export default About;
