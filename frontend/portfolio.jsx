import React from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Portfolio = () => {

    const data = {
      CharityFinder: {
        text:
          "Charity Finder offers a simple, easy-to-use interface for finding charities based on location and interest area.",
        frontend: "React (all hooks!), CSS, Webpack, Charity Navigator API",
        backend: "Express.js",
        link: "https://charityfinderapp.herokuapp.com/#/",
        github: "https://github.com/rose-paul/charity_finder",
        image: "public/charity.png",
      },
      Gramcrackers: {
        text:
          "Gramcrackers, an Instagram clone, is a social media web app that allows users to post photos and interact with other users through following, comments and likes.",
        frontend: "React / Redux",
        backend: "Ruby on Rails, Postgres, AWS",
        link: "https://gramcrackers.herokuapp.com/#/login",
        github: "https://github.com/rose-paul/Gramcrackers",
        image: "public/gramcrackers.png",
      },
      Ride: {
        text:
          "Ride is a web application targeting the motorcycling enthusiast community. It allows a user to record a ride on a map, peruse all saved rides, or leave the community your nugget of wisdom in a ride review",
        frontend: "React / Redux, Mapbox",
        backend: "Express.jsx, MongoDB",
        link: "http://ride-mern.herokuapp.com/#/",
        github: "https://github.com/skleha/ride",
        image: "public/wheel-128.png",
      },
      MoscowCows: {
        text:
          "In Moscow Cows, a game implemented in JavaScript using the HTML5 canvas tag, players must successfully collect full sets of Russian nesting dolls while avoiding being trampled by a herd of cows.",
        frontend: "Javascript, HTML5 canvas",
        backend: "(Of the frontend) webpack",
        link: "https://rose-paul.github.io/MoscowCows/",
        github: "https://github.com/rose-paul/MoscowCows",
        image: "public/matryoshka.png",
      },
    };

    return (
      <div className="project-group-wrapper">
        <div className="project-group">
          {Object.keys(data).map((proj) => {
            let projectData = data[proj];
            return (
              <Card style={{ width: "18rem" }}>
                {/* <Card.Img
                          variant="top"
                        //   src={projectData.image}
                        /> */}
                <Card.Body>
                  <Card.Title>
                    <img src={projectData.image} className="thumbnail"></img>
                    {proj}
                  </Card.Title>
                  <Card.Text>{projectData.text}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>{projectData.frontend}</ListGroup.Item>
                  <ListGroup.Item>{projectData.backend}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={projectData.link}>Live</Card.Link>
                  <Card.Link href={projectData.github}>Github</Card.Link>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    );
}

export default Portfolio;