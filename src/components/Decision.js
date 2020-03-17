import React from "react";
import styled from "styled-components";

const Decision = ({ decision, option1, option2, option3, option4 }) => {
  return (
    <Container>
      <p>{decision}</p>
      <Clickable>{option1}</Clickable>
      <Clickable>{option2}</Clickable>
      <Clickable>{option3}</Clickable>
      <Clickable>{option4}</Clickable>
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
