import React, { useEffect } from "react";
import styled from "styled-components";
import Decision from "./Decision";
import data from "../data/decisions.json";
import Block from "./common/Block";
import { getRandomTime } from "./Time";
import economy from "../data/economy.json";
import happiness from "../data/happiness.json";
import random from "../data/random.json";

const selectRandomText = topic => {
  return topic[Math.floor(Math.random() * topic.length)].content;
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
    const [morning, afternoon, evening] = getRandomTime();

    addNotification([
      {
        isNew: true,
        day: tomorrow,
        hour: morning,
        content: selectRandomText(economy)
      },
      {
        isNew: true,
        day: tomorrow,
        hour: afternoon,
        content: selectRandomText(random)
      },
      {
        isNew: true,
        day: tomorrow,
        hour: evening,
        content: selectRandomText(happiness)
      }
    ]);
  };

  return (
    <Container className={decisionVisibility ? "inactive" : "active"}>
      {data.map((decision, index) => {
        return (
          <>
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
