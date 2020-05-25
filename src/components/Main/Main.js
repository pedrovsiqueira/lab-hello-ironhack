import React from "react";
import Navbar from "../Navbar/Navbar";
import { Container, Content } from "./styles";

const Main = () => (
  <Container>
    <Content>
      <Navbar />
      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn a Frontend framework from scratch, to become a Ninja
        Developer
      </p>
      <button>Awesome!</button>
    </Content>
  </Container>
);

export default Main;
