import React from 'react'
import "./index.scss";
import { useState } from 'react';
const Index = () => {
  const [messagevalue, setmessageValue] = useState("");

  const messageChange = (e) => {
    setmessageValue(e.target.value)
  }
  const sendEmail = () => {
    window.location.href =
      `mailto:iamsinghhhhgagan@gmail.com@.com?subject=Meeting%20Reminder&body=${messagevalue}`;
  };
  return (
    <div className="outside">
      <div className="image-box">
        <img
          className="image"
          src="https://portfolio-five-topaz-11.vercel.app/static/media/contact-img.87eac2b29352fa01abb2f9510ef6ac7e.svg"
        ></img>
      </div>
      <div className="text-box">
        <h1
          style={{
            paddingLeft: "20px",
            fontSize: "42px",
            fontWeight: "900",
            color: "#F7EF8A",
          }}
        >
          Let's Interact!
        </h1>
        <form style={{display : "flex", flexDirection : "column"}}>
          <div className="inner-box">
            <input
              className="input"
              type="text"
              placeholder=" Your First Name"
            ></input>
            <input
              className="input"
              type="text"
              placeholder="Your Last Name"
            ></input>
          </div>

          <input  className="input" type="text" placeholder="Your Email"></input>
          <input value={ messagevalue} onChange={messageChange} className="input1" type="text" placeholder="Message"></input>
          <button onClick={sendEmail} className="btn">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Index