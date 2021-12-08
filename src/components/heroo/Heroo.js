import React from "react";
import styles from "./Heroo.module.css";
import NavBar from "../navBar/NavBar";
import ButtonComponent from "../button/ButtonComponent";

const Heroo = () => {
  return (
    <div className={styles.heroo}>
      <NavBar />
      <h1>Video Catalog is brought to you by TemplateMo.</h1>
      <h1>This is a full-width video banner.</h1>
      <ButtonComponent />
    </div>
  );
};

export default Heroo;
