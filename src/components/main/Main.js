import CardComponent from "../card/CardComponent";
import React from "react";
import styles from "./Main.module.css";
import Image1 from "../../img/img2.jpg";
import Image2 from "../../img/img1.jpg";
import Image3 from "../../img/img3.jpg";
const Main = () => {
  const post = [
    {
      imgSrc: Image1,
      title: "Lorem ipsum dolor",
      text: "You are allowed to use this video catalog for your business websites. Maecenas bibendum, ex in convallis accumsan, mi dolor accumsan diam, sed faucibus lorem sed",
    },
    {
      imgSrc: Image2,
      title: "Lorem ipsum dolor",
      text: "Duis vulputate nisl metus, eget dapibus nunc ultricies id. Ut augue mauris, varius quis nulla non, sollicitudin consectetur nisl. Donec eget arcu placerat, ullamcorper.",
    },
    {
      imgSrc: Image3,
      title: "Lorem ipsum dolor",
      text: "You are allowed to use this video catalog for your business websites. Maecenas bibendum, ex in convallis accumsan, mi dolor accumsan diam, sed faucibus lorem sed",
    },
    {
      imgSrc: Image3,
      title: "Lorem ipsum dolor",
      text: " Video thumbnail has a link to another HTML page. Categories do not need any JS. They are just separated HTML pages. Paging is at the bottom to extend the list as long as you want. This can be a large catalog.",
    },
    {
      imgSrc: Image2,
      title: "Lorem ipsum dolor",
      text: "Duis vulputate nisl metus, eget dapibus nunc ultricies id. Ut augue mauris, varius quis nulla non, sollicitudin consectetur nisl. Donec eget arcu placerat, ullamcorper.",
    },
    {
      imgSrc: Image1,
      title: "Lorem ipsum dolor",
      text: "You are allowed to use this video catalog for your business websites. Maecenas bibendum, ex in convallis accumsan, mi dolor accumsan diam, sed faucibus lorem sed",
    },
  ];
  return (
    <div className={styles.main}>
      <div className={styles.main2}>
        <h1>Our Video Catalog</h1>
        <ul className={styles.categories}>
          Categoris:
          <li>All</li>
          <li>Drone Shots</li>
          <li>Nature</li>
          <li>Action</li>
          <li>Featured</li>
        </ul>
        <div className={styles.cards}>
          {post.map((blog) => {
            return (
              <CardComponent
                imgSrc={blog.imgSrc}
                title={blog.title}
                text={blog.text}
              />
            );
          })}
        </div>
        <div className={styles.pages}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
