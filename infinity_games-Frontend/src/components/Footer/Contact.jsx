import React from "react";
import "../Footer/Contact.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <React.Fragment>
      <div class="container">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="txt">
            <h1>Home</h1>
          </div>
        </Link>
        <div class="contact-box">
          <div class="left">
            <h1>Connect with Us</h1>
            <p>
              Need help or want to provide feedback? We’re always here to listen
              and happy to help.
            </p>
            <h1 className="txtlogo">Infinity@mail.com</h1>
          </div>
          <div class="right">
            <input type="text" class="field" placeholder="Your Name" />
            <input type="text" class="field" placeholder="Your Email" />
            <input type="text" class="field" placeholder="Phone" />
            <textarea
              className="msg"
              placeholder="Message"
              class="field"
            ></textarea>
            <button class="btn">Send</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
