import React from "react";
import styled from "styled-components";
import Block from "./common/Block";

const NextRound = ({ handleClick }) => {
  return (
    <Container>
      <>
        <Skip onClick={handleClick}>
          <span role="img" aria-label="shrug">
            🤷🏼‍♂️
          </span>{" "}
          לדלג למחר
        </Skip>
      </>
    </Container>
  );
};

export default NextRound;

const Container = styled(Block)``;
const Skip = styled.button``;
