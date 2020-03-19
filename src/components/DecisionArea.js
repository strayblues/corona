import React from "react";
import styled from "styled-components";
import Decision from "./Decision";
import data from "../data/decisions.json";
import Block from "./common/Block";

const DecisionArea = ({
  round,
  setRound,
  decisionVisibility,
  setDecisionVisibility
}) => {
  const nextRound = () => {
    setRound(round + 1);
    setDecisionVisibility(false);
    //   setTimeout(() => {
    //     this.setState({setDecisionVisibility(true)})
    //   }, 1500)
    // }
  };

  return (
    <Container className={decisionVisibility ? "inactive" : "active"}>
      {data.map((decision, index) => {
        return (
          <>
            <h5>
              <span>מה לעשות בנושא </span>
              {decision.content}
              <span>?</span>
            </h5>

            <Decision
              round={round}
              nextRound={nextRound}
              option1={decision.options.a}
              option2={decision.options.b}
              option3={decision.options.c}
              option4={decision.options.d}
            />
          </>
        );
      })}
    </Container>
  );
};

const Container = styled(Block)``;

export default DecisionArea;
