import React from "react";
import Card from "react-bootstrap/Card";


function AboutMe() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/Profile.jpg"} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default AboutMe;
