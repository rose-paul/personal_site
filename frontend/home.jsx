import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import cx from "classnames";
import Carousel from "./carousel";

const Home = () => {
  const [showHeader, setHeader] = useState(false);
  const [hide, setHide] = useState('hide-header')

  useEffect(() => {
    setTimeout(setHide(true), 1000)
      setTimeout(setHeader(true), 2000);
  }, []);

  return (
    <CSSTransition
      in={showHeader}
      timeout={4000}
      classNames="header-transition"
      appear
    >
      <header className={`App-header ${hide}`}>
        <img alt="" src="../public/yaroslavl.JPG" id="display-pic" />
        <div>
          <h1>Paul Rose</h1>
          <h3>Software Engineer and</h3>
           <Carousel />
          <div className="header-links">
            <a
              href="https://github.com/rose-paul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="" src="../public/001-github.png" />
            </a>
            <a
              href="https://www.linkedin.com/in/paul-rose-72626952/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="" src="../public/002-linkedin.png" />
            </a>
            <a href="mailto:prose0021@gmail.com">
              <img alt="" src="../public/003-email.png" />
            </a>

            <a href="../public/PaulRose_Resume.pdf" download="PaulRose_Resume">
              <img src="../public/cv.png" alt="" />
            </a>
          </div>
        </div>
      </header>
    </CSSTransition>
  );
};

export default Home;
