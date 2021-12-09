import CardComponent from "../card/CardComponent";
import React from "react";
import styles from "./Main.module.css";
import Image1 from "../../img/img2.jpg";
import Image2 from "../../img/img1.jpg";
import Image3 from "../../img/img3.jpg";
import { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
const Main = () => {
  const [allPost, setAllPost] = useState([]);
  const [teslaPost, setTeslaPost] = useState([]);
  const [techCrunch, setTechCrunch] = useState([]);
  const post = [
    {
      urlToImage: Image1,
      title: "Lorem ipsum dolor",
      text: "You are allowed to use this video catalog for your business websites. Maecenas bibendum, ex in convallis accumsan, mi dolor accumsan diam, sed faucibus lorem sed",
    },
    {
      urlToImage: Image2,
      title: "Lorem ipsum dolor",
      text: "Duis vulputate nisl metus, eget dapibus nunc ultricies id. Ut augue mauris, varius quis nulla non, sollicitudin consectetur nisl. Donec eget arcu placerat, ullamcorper.",
    },
    {
      urlToImage: Image3,
      title: "Lorem ipsum dolor",
      text: "You are allowed to use this video catalog for your business websites. Maecenas bibendum, ex in convallis accumsan, mi dolor accumsan diam, sed faucibus lorem sed",
    },
    {
      urlToImage: Image3,
      title: "Lorem ipsum dolor",
      text: " Video thumbnail has a link to another HTML page. Categories do not need any JS. They are just separated HTML pages. Paging is at the bottom to extend the list as long as you want. This can be a large catalog.",
    },
    {
      urlToImage: Image2,
      title: "Lorem ipsum dolor",
      text: "Duis vulputate nisl metus, eget dapibus nunc ultricies id. Ut augue mauris, varius quis nulla non, sollicitudin consectetur nisl. Donec eget arcu placerat, ullamcorper.",
    },
    {
      urlToImage: Image1,
      title: "Lorem ipsum dolor",
      text: "You are allowed to use this video catalog for your business websites. Maecenas bibendum, ex in convallis accumsan, mi dolor accumsan diam, sed faucibus lorem sed",
    },
  ];

  useEffect(() => {
    const url =
      "https://newsapi.org/v2/everything?q=apple&from=2021-12-08&to=2021-12-08&sortBy=popularity&pageSize=6&apiKey=d6048e1e09814b0d96413ed963bf177d";

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAllPost(data.articles === undefined ? post : data.articles);
      });
  }, []);

  useEffect(() => {
    const url =
      "https://newsapi.org/v2/everything?q=tesla&from=2021-11-09&sortBy=publishedAt&pageSize=6&apiKey=d6048e1e09814b0d96413ed963bf177d";

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTeslaPost(data.articles === undefined ? post : data.articles);
      });
  }, []);
  useEffect(() => {
    const url =
      " https://newsapi.org/v2/top-headlines?sources=techcrunch&pageSize=6&apiKey=d6048e1e09814b0d96413ed963bf177d";

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTechCrunch(data.articles === undefined ? post : data.articles);
      });
  }, []);

  return (
    <div id="bottom" className={styles.main}>
      <div className={styles.main2}>
        <h1>Our Video Catalog</h1>
        <div>
          <div style={{ float: "left" }}>
            <h3>Categories: </h3>
          </div>
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="All post">
              <div className={styles.cards}>
                {allPost.map((blog) => {
                  return (
                    <CardComponent
                      imgSrc={blog.urlToImage}
                      title={blog.title}
                      text={blog.text}
                    />
                  );
                })}
              </div>
            </Tab>
            <Tab eventKey="profile" title="Tesla">
              <div className={styles.cards}>
                {teslaPost.map((blog) => {
                  return (
                    <CardComponent
                      imgSrc={blog.urlToImage}
                      title={blog.title}
                      text={blog.text}
                    />
                  );
                })}
              </div>
            </Tab>
            <Tab eventKey="contact" title="TechCrunch">
              <div className={styles.cards}>
                {techCrunch.map((blog) => {
                  return (
                    <CardComponent
                      imgSrc={blog.urlToImage}
                      title={blog.title}
                      text={blog.text}
                    />
                  );
                })}
              </div>
            </Tab>
          </Tabs>
        </div>
        <div className={styles.pages}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>&#62;</span>
        </div>
      </div>
    </div>
  );
};

export default Main;
