
import "./index.scss";
import React from 'react'
const list = [
    {
        items : "About"

    },
    {
        items : "Work"
        
    },
    {
        items : "Contact"
    }
]


const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleButtonClick = () => {

  }
    return (
      <div className="outer">
        <div className="inner" onClick={handleButtonClick}>
          <img className="logo" src="./logo.png"></img>
          <a
            href="https://gagan-portfolio-b67e.onrender.com/"
            style={{ color: "white", textDecoration: "none" }}
          >
            <p className="text">Gagan | Portfolio</p>
          </a>
        </div>
        <div className="list">
          <nav>
            <a className="btn" onClick={() => scrollToSection("about")}>
              About
            </a>
            <a className="btn" onClick={() => scrollToSection("works")}>
              Work
            </a>
            <a className="btn" onClick={() => scrollToSection("contact")}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    );
}
export default Header