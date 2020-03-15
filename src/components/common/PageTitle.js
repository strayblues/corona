import React from "react";
import styled from "styled-components";

const PageTitle = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

const Title = styled.h1`
  letter-spacing: 3px;
  text-align: center;
  font-weight: 700;
  color: #ff7788;
`;
const Subtitle = styled.h3`
  letter-spacing: 2px;
  text-align: center;
  color: #ff7788;
`;
const Container = styled.section`
  padding: 0.5em;
  margin: 0;
  background: #222;
  font-family: "Alef", sans-serif;
`;

export default PageTitle;
