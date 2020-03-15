import React from "react";
import styled from "styled-components";

const Decision = ({ question, answer1, answer2, answer3 }) => {
  return (
    <Container>
      <p>{question}</p>
      <Clickable>{answer1}</Clickable>
      <Clickable>{answer2}</Clickable>
      <Clickable>{answer3}</Clickable>
    </Container>
  );
};

const Clickable = styled.a`
  width: 100%;
  padding: 8px;
`;
const Container = styled.div`
  font-family: "Alef", sans-serif;
`;

export default Decision;
