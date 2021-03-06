import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import Carousel from "./carousel";

const Home = () => {
  const [showHeader, setHeader] = useState(false);
  const [hide, setHide] = useState('hide-header')
  const [transform, setTransform] = useState(null)
  console.log(transform)
  useEffect(() => {
    setTimeout( () => { setTransform('transform-header')}, 10)
      // setTimeout(setHeader(true), 2000);
  }, []);

  return (
      <div className="header-wrapper">
        {/* <CSSTransition
          in={showHeader}
          timeout={4000}
          classNames="header-transition"
          appear
        > */}
          <header className={`App-header ${transform} fade-in`}>
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

                <a href="public/PaulRose_Resume.pdf" download="PaulRose_Resume">
                  <img src="../public/cv.png" alt="" />
                </a>
              </div>
            </div>
          </header>
        {/* </CSSTransition> */}
      </div>
  );
};

export default Home;
