import React, { useEffect } from "react";
import styled from "styled-components";
import Decision from "./Decision";
import data from "../data/decisions.json";
import Block from "./common/Block";
import { randomTime } from "./Time";
import economy from "../data/economy.json";

// const getRangomInt = () => {
//   Math.round(Math.random() * 10);
// };
const selectRandomText = subject => {
  return subject[Math.floor(Math.random() * subject.length)].content;
};

const DecisionArea = ({
  round,
  setRound,
  decisionVisibility,
  setDecisionVisibility,
  addNotification
}) => {
  const nextRound = () => {
    const tomorrow = round + 1;
    setRound(tomorrow);
    setDecisionVisibility(false);
    const [morning, afternoon, evening] = randomTime();

    addNotification([
      {
        isNew: true,
        day: tomorrow,
        hour: morning,
        subject: "economy",
        content: selectRandomText(economy)
      },
      {
        isNew: true,
        day: tomorrow,
        hour: afternoon,
        subject: "economy",
        content: selectRandomText(economy)
      },
      {
        isNew: true,
        day: tomorrow,
        hour: evening,
        subject: "economy",
        content: selectRandomText(economy)
      }
    ]);
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
