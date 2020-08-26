import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../shared/components/Buttons';
import Container from '../../shared/components/Container';

const MainPage = () => (
  <Container>
    <Link to="/">To ...</Link>
    <Button>Button</Button>
  </Container>
);

export default MainPage;
