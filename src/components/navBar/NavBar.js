import React from "react";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <ul>
        <li>
          <a href="#">Video</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#contakt">Contakt</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
