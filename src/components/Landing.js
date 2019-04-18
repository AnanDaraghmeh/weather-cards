import React from "react";
import { Container, Segment, Header } from "semantic-ui-react";

const Landing = () => {
  return (
    <Segment basic placeholder textAlign="center">
      <Container>
        <Header as="h2" style={{ color: "white" }}>
          Welcome to Weather Cards!
        </Header>
        <Header style={{ color: "white" }}>
          Search for cities or allow access to your location to start adding
          weather cards.
        </Header>
      </Container>
    </Segment>
  );
};

export default Landing;
