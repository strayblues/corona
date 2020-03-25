import React from "react";
import styled from "styled-components";
import Block from "./common/Block";

const Decision = ({ round, nextRound, infectionRate, setInfectionRate }) => {
  function handleClick() {
    if (document.getElementById("isolationLevel0").checked) {
      setInfectionRate(0.3);
    } else if (document.getElementById("isolationLevel1").checked) {
      setInfectionRate(0.3);
    } else if (document.getElementById("isolationLevel2").checked) {
      setInfectionRate(0.2);
    } else if (document.getElementById("isolationLevel3").checked) {
      setInfectionRate(0.15);
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
const Container = styled(Block)`
  background: #eee;
`;
