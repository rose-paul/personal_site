import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import cx from "classnames";

const Home = () => {
  const [showHeader, setHeader] = useState(false);

  useEffect(() => {
      setTimeout(setHeader(true), 2000);
  }, []);

  return (
    <CSSTransition
      in={showHeader}
      timeout={4000}
      classNames="header-transition"
      appear
    >
      <header className={cx("App-header", "header-transition--active")}>
        <img alt="" src="../public/pic.jpeg" />
        <div>
          <h1>Paul Rose</h1>
          <h3>Software Engineer </h3>
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

            <a href="PaulRose_Resume.pdf" download="PaulRose_Resume">
              <img src="../public/cv.png" alt="" />
            </a>
          </div>
        </div>
      </header>
    </CSSTransition>
  );
};

export default Home;
