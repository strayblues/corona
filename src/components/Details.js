import React from "react";
import styled from "styled-components";
import Info from "./common/Info";
import Block from "./common/Block";

const Details = () => {
  return (
    <Container>
      <Day>
        <Info label={"יום "} content1={"1"}></Info>
      </Day>
      <Score>
        <Info label={"יש׳ך 80 "} content1={"נקודות"}></Info>
      </Score>
    </Container>
  );
};

const Score = styled.span`
  color: red;
`;
const Day = styled.span`
  font-size: 80%;
  display: inline-block;
`;
const Container = styled(Block)``;

export default Details;
