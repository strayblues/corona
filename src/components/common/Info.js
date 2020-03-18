import React from "react";
import styled from "styled-components";

const Info = ({ label, number }) => {
  return (
    <Container>
      <span>{label}</span>
      <StyledNum>{number}</StyledNum>
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
