import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p>היי שלום אני הפוטר של האפליקציה</p>
    </Container>
  );
};

const Container = styled.section`
  background: #ddd;
  font-family: "Alef", sans-serif;
  text-align: center;
`;

export default Footer;
