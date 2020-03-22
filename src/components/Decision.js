import React from "react";
import styled from "styled-components";

const Decision = ({ round, nextRound }) => {
  function handleClick(item) {
    if (item === 1) {
      // more ppl get infected
    } else if (item === 2) {
      // something happens
    } else if (item === 3) {
      // something happens
    } else if (item === 4) {
      // something happens
    }
    // in any case, increase roundCount by 1
    nextRound();

    // add className="inactive" to parent

    return round;
    // and start a new round
  }

  return (
    <Container>
      <PolicyLine>
        <Skip onClick={e => handleClick(5)}>
          <span role="img" aria-label="shrug">
            🤷🏼‍♂️
          </span>{" "}
          לדלג למחר
        </Skip>
      </PolicyLine>
    </Container>
  );
};

export default Decision;

const PolicyLine = styled.div``;

const Skip = styled.button``;
const Container = styled.div`
  background: #eee;
`;
