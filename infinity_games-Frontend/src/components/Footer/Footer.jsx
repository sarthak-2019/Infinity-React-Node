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
        <a
          href="https://github.com/sarthak-2019/Code_To_Thrive-WebOCode"
          target="_blank"
        >
          <GitHubIcon
            className="giticon"
            style={{ fontSize: 40, color: "white" }}
          />
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
