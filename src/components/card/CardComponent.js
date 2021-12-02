import React from "react";
import styles from "./Card.module.css";
import Card from "react-bootstrap/Card";
import Button from "@restart/ui/esm/Button";
const CardComponent = ({ imgSrc, title, text }) => {
  return (
    <Card
      style={{
        width: "300px",
        margin: "20px 0 20px 0",
        backgroundColor: "#f4f4f4",
      }}
    >
      <Card.Img variant="top" src={imgSrc} style={{ height: "200px" }} />
      <Card.Body className={styles.Body}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text} </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
