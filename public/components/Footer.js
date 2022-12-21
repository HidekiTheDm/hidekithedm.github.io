import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/pedro-pinto-ipv/" target="_blank"><LinkedInIcon /></a>
          <a href="mailto:pedroalmeida.cch@gmail.com" target="_blank"><EmailIcon /></a>
          <a href="https://github.com/HidekiTheDm" target="_blank"><GithubIcon /></a>
      </div>
      <p> &copy; 2022 All Rights Reserved to Pedro Pinto.</p>
    </div>
  );
}

export default Footer;
