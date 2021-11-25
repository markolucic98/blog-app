import Card from "../card/Card";
import React from "react";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <div className={styles.main}>
      <h1>This is Main</h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Main;
