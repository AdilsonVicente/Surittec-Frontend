import React from 'react';
import { Container, Content } from './styles';

export const Header = ({ title }) => {
  return (
    <Container>
      <Content>{title}</Content>
    </Container>
  );
};
