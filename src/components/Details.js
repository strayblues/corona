import React from "react";
import styled from "styled-components";
import Info from "./common/Info";
import Block from "./common/Block";
import Time from "./Time";

const Details = () => {
  return (
    <Container>
      <Content>
        <Time></Time>
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
    max-height: 5em;
  }
`;

export default Details;
