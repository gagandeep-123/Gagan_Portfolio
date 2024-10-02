import React, { useState } from 'react'
import './index.scss';
import { useTypewriter, Cursor } from "react-simple-typewriter";





const Index = () => {
    const [text] = useTypewriter({
      words: [
        "Glad to have you here :) ",
        "MERN Stack Developer💻🚀",
        "Available for Work📆",
        "Drop a feeback or Contact Me📥",
      ],
      loop: {},
    });
    

  return (
    <div className="outside">
      <img
        className="image"
        style={{ width: "100%", position: "absolute", height: "90vh" }}
        src="./background.jpg"
      ></img>
      <h1 className="entry-text">
        Hi, I'm Gagan
              <span style={{ color: "#F7EF8A", fontWeight : "600" }}>
          {text} <Cursor />
        </span>
      </h1>
      <img
        style={{ position: "relative", height: "65vh" }}
        src="./background2.png"
      ></img>
    </div>
  );
}

export default Index