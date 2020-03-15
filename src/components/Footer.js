import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <p>זה הפוטר של האפליקציה, יו!</p>
    </Container>
  );
};

const Container = styled.section`
  padding: 2em 1em;
  margin: 0;
  background: #eb7c66;
  font-family: "Alef", sans-serif;
`;

export default Footer;
