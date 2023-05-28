import React from "react";
import { Container, Navbar } from "react-bootstrap";

export const HeaderComponent = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <i className="wi wi-night-sleet"></i>Get The Weather
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Created By: <a href="#">Devidip Adhikary</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
