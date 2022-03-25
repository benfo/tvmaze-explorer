import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHref } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  const home = useHref({ pathname: "/" });
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href={home}>TV Maze</Navbar.Brand>
        <Nav>
          <LinkContainer to="/">
            <Nav.Link href={home}>Home</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
