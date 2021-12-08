import React from "react";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <ul>
        <li>Videos</li>
        <li>about</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
