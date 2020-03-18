import React from "react";
import styled from "styled-components";

const Info = ({ label1, number, label2 }) => {
  return (
    <Container>
      <span>{label1}</span>
      <StyledNum>{number}</StyledNum>
      <span>{label2}</span>
    </Container>
  );
};

const StyledNum = styled.span`
  color: red;
`;
const Container = styled.div`
  font-family: "Alef", sans-serif;
`;

export default Info;
