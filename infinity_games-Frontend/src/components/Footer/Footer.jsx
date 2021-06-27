import React from "react";
import "./Footer.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Route, Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="footer">
      <div className="logo_contianer">
        <h1>Infinity</h1>
      </div>
      <div className="media">
        <a href="https://github.com/" target="_blank">
          <GitHubIcon style={{ fontSize: 50, color: "black" }} />
        </a>
      </div>
      <Link to="/contact">
        <div className="contact">
          <button>
            <h1>Contact</h1>
          </button>
        </div>
      </Link>
      
    </div>
  );
};

export default Footer;
