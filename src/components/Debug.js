import React from "react";
import styled from "styled-components";

const Debug = ({ infectionRate }) => {
  return <Container>{infectionRate}</Container>;
};

export default Debug;

const Container = styled.div`
  background: white;
  color: red;
  position: fixed;
  text-align: center;
  border: 1px solid red;
  width: 3em;
  height: 3em;
  border-radius: 50%;
  top: 0;
`;
