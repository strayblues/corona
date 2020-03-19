import React from "react";
import styled from "styled-components";
import Decision from "./Decision";
import data from "../data/decisions.json";
import Block from "./common/Block";
import { randomTime } from "./Time";

const DecisionArea = ({
  round,
  setRound,
  decisionVisibility,
  setDecisionVisibility,
  addNotification
}) => {
  const nextRound = () => {
    setRound(round + 1);
    setDecisionVisibility(false);
    addNotification({
      day: round + 1,
      hour: randomTime()[0],
      subject: "economy",
      content: "לשכת שר האוצר: ״מצבנו מעולם לא היה טוב יותר, ה-OECD מתקנא בנו.״"
    });
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
