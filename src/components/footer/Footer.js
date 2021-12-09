import React from "react";
import styles from "./Footer.module.css";
import Subscribe from "../button/Subscribe";
const Footer = () => {
  return (
    <div id="contakt" className={styles.footer}>
      <div className={styles.footer1}>
        <div className={styles.footerLeft}>
          <h2>Do you want to get our latest updates?</h2>
          <p>
            Please subscribe our newsletter for upcoming new videos and latest
            information about our work. Thank you.
          </p>
          <div className={styles.submit}>
            <input
              type="text"
              style={{ marginRight: "15px", width: "250px" }}
              name="email"
              placeholder="Your Email..."
              required=""
            ></input>
            <Subscribe />
          </div>
        </div>
        <div className={styles.footerCentar}>
          <h3>Quick Links</h3>
          <ul>
            <li>Duis bibendum</li>
            <li>Purus non dignissim</li>
            <li>Sapien metus gravida</li>
            <li>Eget consequat</li>
            <li>Praesent eu pulvinar</li>
          </ul>
        </div>
        <div className={styles.footerCentar}>
          <h3>Our Pages</h3>
          <ul>
            <li>Our Videos</li>
            <li>License Terms</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
