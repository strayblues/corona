import React from "react";
import styled from "styled-components";

const Debug = ({ infectionRate, economicState, nationalHappiness }) => {
  return (
    <>
      <Container>
        <div>r = {infectionRate.toFixed(3)}</div>
        <div>e = {economicState.toFixed(3)}</div>
        <div>h = {nationalHappiness.toFixed(3)}</div>
      </Container>
      ;
    </>
  );
};

export default Debug;

const Container = styled.div`
  background: white;
  color: red;
  position: fixed;
  text-align: center;
  border: 1px solid red;
  width: 6em;
  padding: 0 4px;
  height: 6em;

  top: 0;
  margin-bottom: 3em;
`;
