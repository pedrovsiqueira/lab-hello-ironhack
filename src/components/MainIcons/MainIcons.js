import React from 'react';

import { Container, Content, Card } from './styles';
import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'
import Icon3 from '../../assets/icon3.png'
import Icon4 from '../../assets/icon4.png'

const MainIcons = () => (
  <Container>
    <Content>
      <Card>
        <img src={Icon1} alt="" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
      </Card>
      <Card>
        <img src={Icon1} alt="" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
      </Card>
      <Card>
        <img src={Icon1} alt="" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
      </Card>
      <Card>
        <img src={Icon1} alt="" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
      </Card>
    </Content>
  </Container>
);

export default MainIcons;