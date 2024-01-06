/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Flower Species Classification ",
    description:
      "The project employed the well-known Iris dataset, containing samples from three different iris flower species, making it a classic benchmark for machine learning classification tasks.I chose Logistic Regression as the classification algorithm due to its simplicity and robust performance, with 98% accuracy.",
    url: "https://github.com/Adeelmunir707/Coding-Samurai-inturship-tasks/tree/main/flower-species",
  },
  {
    title: "Movies Recommender System",
    description:
      "In this project, I've created two movie recommendation systems: one based on cosine similarity and another using content-based filtering. These recommendation systems help users discover new movies based on their preferences and similarities between movies.",
    url: "https://github.com/Adeelmunir707/Machine-Learning-Projects/tree/main/movies-recomender",
  },
  {
    title: "Sentiment Analysis of Twitter Dataset",
    description:
      "The heart of the project involved implementing a Logistic Regression model, trained to classify text sentiment into categories such as positive, negative, or neutral. I took it a step further by creating a user-friendly web application. This application allows users to input text, and with the click of a button, it justifies sentiments as positive, negative, or neutral, providing real-time sentiment analysis results.",
    url: " https://pulsefixer.streamlit.app/",
  },
  {
    title: "Tacos Shop - Testimonal to Front-End",
    description:
      "The Web Projects using HTML and CSS repository is a collection of web development projects that are built primarily using HTML and CSS. These projects serve as practical examples and templates to help developers and designers enhance their front-end skills and gain inspiration for creating visually appealing and functional websites.",
    url: "https://github.com/Adeelmunir707/Web-Projects",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
