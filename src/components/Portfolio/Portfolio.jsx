import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/proj-1.jpg";
import IMG2 from "../../assets/proj-2.jpg";
import IMG3 from "../../assets/proj-3.png";
import IMG4 from "../../assets/proj-4.png";
import IMG5 from "../../assets/proj-5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Microsoft Clone",
    github: "https://github.com/MeerUlHassan/Microsoft-Html-Css",
    demo: "https://meerulhassan.github.io/Microsoft-Html-Css/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Coding Blog (BootStrap5)",
    github: "https://github.com/MeerUlHassan/BlogPage-Html-Css-BS",
    demo: "https://meerulhassan.github.io/BlogPage-Html-Css-BS/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Little Lemon (HTML/CSS)",
    github: "https://github.com/MeerUlHassan/litelLemon-Html-Css",
    demo: "https://meerulhassan.github.io/litelLemon-Html-Css/index.html",
  },
  {
    id: 4,
    image: IMG4,
    title: "Responsive YouTube Clone",
    github: "https://github.com/",
    demo: "https://meerulhassan.github.io/ytClone/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Fast-Food App",
    github: "https://github.com/MeerUlHassan/MenuPage-kfc",
    demo: "https://meerulhassan.github.io/MenuPage-kfc/",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio's</h2>

      <div className="container porfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
