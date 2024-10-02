import React from 'react'
import './index.scss';
import { LuPaperclip } from "react-icons/lu";


const projects = [
  {
    Name: "FlexFlix",
    TechUsed: [
      "Html5",
      "Tailwind Css",
      "JavaScript",
      "ReactJs",
      "ReduxJs",
      "Firebase",
    ],
    About:
      "Created an OTT streaming platform where the user can browse through various movies and webseries using javaScript and reactJs. It is a similar version of netflix with my own design touch, showing SignIn page, SignUp Page, browse page and alot more.This uses Firebase Services for user authentication and Cloud Firestore to sync and store the videos",
    Image: "./netflixpicture.png",
    Link: "https://netflixgpt-beta.vercel.app/",
  },
  {
    Name: "Quill.",
    TechUsed: [
      "JavaScript",
      "ReactJs",
      "SASS(CSS)",
      "NodeJs",
      "ExpressJs",
      "MongoDB",
    ],
    About:
      "Quill. is Blog sharing Platform which enables the users to write, share and read stories. It allows the users to save stories as drafts, publish their stories or schedule them for later. Quill includes a secured Sign up via Email OTP verification. The user can bookmark the other stories for reading and add notes as well. The user can follow their favourite authors and react on their stories as well",
    Image: "./quill.jpg",
    Link: "https://quill-blogging-website.onrender.com/",
  },
  {
    Name: "PixyWorld",
    TechUsed: ["Html5", "Css", "JavScript", "ReactJs"],
    About:
      "An image exploration web Application created using ReactJS that allows userto view several random images and find images of their choice.",
    Image: "./pixypicture.png",
    Link: "https://pixyworld.netlify.app/",
  },
  {
    Name: "Rentz.com",
    TechUsed: ["ReactJs", "Redux", "Css(Sass)", "NodeJs", "Express", "MongoDB"],
    About:
      "Rentz.com is a property rental platform developed using ReactJS and NodeJS, MongoDB for user authentication. It consists of user LOGIN AND SIGNUP functionality with avatar selection, a curated property list according to the selected location by the user, Filterfunctionality to filterthe property results on the basis ofthe property size and budget. Cart functionality that allows the userto add properties and also allows to remove from the wishlist and clearthe cart,payment section to view the final cart value.",
    Image: "./propertypicture.png",
    Link: "https://totality-frontend-challenge-frontend-web.onrender.com/",
  },
];

const Index = () => {
  return (
    <div>
      <section style={{height : "64vh"}} className="wave-section">
        <div  style={{height : "211px"}} className="wave-text">My Works</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,197.3C840,181,960,171,1080,160C1200,149,1320,139,1380,133.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "black",
          flexWrap: "wrap",
        }}
        className="project-container"
      >
        {projects.map((item,idx) => {
          return (
            <div className={`outest ${idx % 2 == 0 ? "" : "addedClass"}`}>
              <div className="image-cont">
                <img
                  style={{ width: "90%", borderRadius: "11px" }}
                  src={item.Image}
                ></img>
              </div>
              <div className="text-box">
                <div className="name-about-div">
                  <p className="name-text">{item.Name}</p>
                  <div className="about-text">{item.About}</div>
                </div>
                <div style={{ color: "white" }} className="tech-div">
                  <div style={{ fontWeight: "700", color: "pink" }}>
                    Technolgies Used:
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "11px",
                      width: "auto",
                      paddingTop: "12px",
                    }}
                  >

                    {item.TechUsed.map((ele) => {
                      return (
                        <div
                          style={{
                            width: "auto",
                            fontWeight: "700",
                            backgroundColor: "#a58b90",
                            height: "16px",
                            borderRadius: "11px",
                            display: "flex",
                            padding: "6px 10px",
                            marginRight: "9px",
                            color : "black",
                          }}
                        >
                          {ele}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="button-div" curs>
                  <a
                    style={{
                      paddingTop: "2px",
                      paddingTop: "9px",
                      width: "44px",
                      height: "40px",
                    }}
                    href={item.Link}
                    target="_blank"
                  >
                    <button
                      style={{
                        width: "44px",
                        height: "40px",
                        borderRadius: "105%",
                        cursor: "pointer",
                      }}
                    >
                      <LuPaperclip style={{ width: "70%" }} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Index