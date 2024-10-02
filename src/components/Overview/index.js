import React from 'react'
import './index.scss';
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";





const index = () => {
  return (
    <div className="main">
      <div className="text-container">
        <h2 className="heading-two">Hello, I'm Gagandeep Singh</h2>
        <h4 className="heading-four">Full Stack Developer</h4>
        <p className="para">
          I'm a college student pursuing B.Tech in Computer Science, spending my
          days diving into algorithms and data structures. At night, I switch to
          work on Full stack development and learning the ins and outs of the
          MERN stack, Seamlessly merging software development principles with
          web design.💻🌟Beyond academics and tech, I take pride in leading
          several clubs at my university,from dance to fashion, which complement
          my interest in sports and fitness also. This involvement enriches my
          balanced lifestyle. I'm on the lookout for software development roles
          so hit me up ! ;)
          <br></br>
          <br></br>
          Through this website, you will discover a collection of my projects
          and skills that showcase my abilities and creative problem-solving
          approach. If you're seeking a Full Stack Developer who is passionate
          about delivering excellence, let's connect and collaborate on creating
          something remarkable together.
        </p>
        <div className="button-div">
          <a
            href="https://www.linkedin.com/in/gagandeep-singh-664bb422b/" target='_blank'
            className="button"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/gagandeep-123" target='_blank'
            className="button">
            <SiGithub />
          </a>
        </div>
        <div className="resume-div">
          <a className="anchor" href="./resume.pdf" download={"resume.pdf"}>
            My resume
          </a>
        </div>
      </div>
      <div className="image-container">
        <img className='image' src="./hi.gif"></img>
      </div>
    </div>
  );
  
}

export default index