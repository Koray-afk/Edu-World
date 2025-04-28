import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

function About({setPlayvideo}) {
  return (
    <div>
      <div className="about">
        <div className="leftabout">
          <img src={about_img} alt="about the image" className="about-image"/>
          <img src={play_icon} alt="play icon" className="play-icon" onClick={()=> setPlayvideo(true)}/>
        </div>
        <div className="rightabout">
          <h3>ABOUT UNIVERSITY</h3>
          <h2>Shaping the Leaders of Tomorrow</h2>
          <p>
            At our university, we offer dynamic and forward-thinking education
            programs that go beyond the classroom. Designed to equip future
            educators with the tools, mindset, and real-world experience needed
            to thrive, our curriculum blends academic excellence with innovative
            practice. From immersive hands-on training to dedicated mentorship,
            our programs foster creativity, critical thinking, and leadership —
            all essential traits for shaping the next generation. Whether you’re
            dreaming of teaching, leading a school, offering guidance as a
            counselor, or driving change in educational policy, you’ll find a
            program tailored to your goals. Step into a future where you don’t
            just learn education — you live it, lead it, and transform it.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
