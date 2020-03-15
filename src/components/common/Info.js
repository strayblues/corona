import React from "react";
import styled from "styled-components";

const Info = ({ label, content1, content2 }) => {
  return (
    <Container>
      <span>{label}</span>
      <span>{content1}</span>
      <p>{content2}</p>
    </Container>
  );
};

const Container = styled.div`
  font-family: "Alef", sans-serif;
`;

export default Info;
