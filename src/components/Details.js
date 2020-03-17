import React from "react";
import styled from "styled-components";
import Info from "./common/Info";
import Block from "./common/Block";

const Details = () => {
  return (
    <Container>
      <Day>
        <Info label={"יום: "} number={"1"}></Info>
      </Day>
    </Container>
  );
};

const Day = styled.span`
  font-size: 120%;
`;
const Container = styled(Block)`
  @media (max-width: 768px) {
    max-height: 5em;
  }
`;

export default Details;
