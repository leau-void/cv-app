import React, { Component } from "react";
import githubLogo from "../assets/githubLogo.png";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <span className="footer__text">Copyright © 2021 leau-void</span>{" "}
        <a className="footer__link" href="https://github.com/leau-void/cv-app">
          <img className="footer__github" src={githubLogo} alt="Github"></img>
        </a>
      </div>
    );
  }
}

export default Footer;
