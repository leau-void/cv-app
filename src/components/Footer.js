import "../styles/footer.css";
import React from "react";
import githubLogo from "../assets/githubLogo.png";

const Footer = () => {
  return (
    <div className="footer">
      <span className="footer__text">Copyright © 2021 leau-void</span>{" "}
      <a className="footer__link" href="https://github.com/leau-void/cv-app">
        <img className="footer__github" src={githubLogo} alt="Github"></img>
      </a>
    </div>
  );
};

export default Footer;
