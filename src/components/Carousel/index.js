import React from 'react'
import './index.scss';
import Slider from "react-slick";


const skillArr = [
  {
    img: "https://w7.pngwing.com/pngs/186/608/png-transparent-html5-icon-%E2%80%A2-html-social-network-icon.png",
    name: "HTML5",
    link: "",
  },
  {
    img: "./css.png",
    name: "CSS",
    link: "",
  },
  {
    img: "./javascript.png",
    name: "JavaScript",
    link: "",
  },
  {
    img: "https://w7.pngwing.com/pngs/452/495/png-transparent-react-javascript-angularjs-ionic-github-text-logo-symmetry-thumbnail.png",
    name: "ReactJS",
    link: "",
  },
  {
    img: "./redux.png",
    name: "ReduxJs",
    link: "",
  },
  {
    img: "https://e7.pngegg.com/pngimages/306/37/png-clipart-node-js-logo-node-js-javascript-web-application-express-js-computer-software-others-miscellaneous-text.png",
    name: "NodeJs",
    link: "",
  },
  {
    img: "./express.png",
    name: "ExpressJs",
    link: "",
  },
  {
    img: "https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png",
    name: "MongoDB",
    link: "",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
    name: "TailwindCSS",
    link: "",
  },
  {
    img: "./bootstrap.png",
    name: "Bootstrap",
    link: "",
  },
  {
    img: "./aws.png",
    name: "AWS",
    link: "",
  },
];
const index = () => {

    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows : false
    }
  return (
    <div className="main-wrapper">
      <p style={{ color: "white", fontSize : "48px", fontWeight : "700" }}>Expertise</p>
      <div style={{ margin : "0px 48px"}}>
      <Slider {...settings}>
        {skillArr.map((item) => {
          return (
            <div className="card-wrapper">
              <div className="inner-wrapper">
                <img className="image" src={item.img}></img>
                <p style={{fontSize: "21px",marginTop: "10px",fontWeight: "700"}}>{item.name}</p>
              </div>
            </div>
          );
        })}
        </Slider>
        </div>
    </div>
  );
}

export default index