import React from "react";
import styles from "./Heroo.module.css";
import NavBar from "../navBar/NavBar";

const Heroo = () => {
  return (
    <div className={styles.heroo}>
      <h1>This is Heroo</h1>
      <NavBar />
    </div>
  );
};

export default Heroo;
