import CardComponent from "../card/CardComponent";
import React from "react";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <div className={styles.main}>
      <h1>This is Main</h1>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
};

export default Main;
