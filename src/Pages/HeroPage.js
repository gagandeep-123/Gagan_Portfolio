import React from 'react'
import Header from "../components/Header";
import Body from "../components/Body";
import Overview from "../components/Overview";
import Works from "../components/Works";
import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const HeroPage = () => {
  return (
    <div>
      <Header />
      <Body />
      <div id="about">
        <Overview />
      </div>
      <Carousel />
      <div id="works">
        <Works />
      </div>
      <div id = "contact">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default HeroPage