import React from "react";
import "../Footer/Contact.css";
const Contact = () => {
  return (
    <>
      <div class="container">
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
    </>
  );
};

export default Contact;
