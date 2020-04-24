import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Facts = () => (
  <Accordion>
    {/* <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          COVID-19 Survival Plan
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>Cook / Yoga</Card.Body>
      </Accordion.Collapse>
    </Card> */}
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          What I'm Working On
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body>Adding to this site!</Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="2">
          What I'm Reading
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="2">
        <Card.Body>Mathematics Rebooted</Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="3">
          What I'm Listening To
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="3">
        <Card.Body>Probably Paul van Dyk</Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="4">
          What I'm Playing
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="4">
        <Card.Body>Animal Crossing</Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
);

export default Facts;