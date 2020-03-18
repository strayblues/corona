import React from "react";
import styled from "styled-components";
import Block from "./common/Block";
import Info from "./common/Info";

const Details = () => {
  return (
    <Container>
      <Content>
        <Info label1={"יום "} number={5} label2=" למשבר הקורונה" />
      </Content>
    </Container>
  );
};

const Content = styled.span`
  font-size: 120%;
  color: black;
`;
const Container = styled(Block)`
  @media (max-width: 768px) {
    max-height: 2em;
    padding: 0;
    text-align: center;
  }
`;

export default Details;
