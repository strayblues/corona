import React from "react";
import styled from "styled-components";
import Decision from "./Decision";
import Block from "./common/Block";
import { getRandomTime } from "./Time";
import economy from "../data/economy.json";
import happiness from "../data/happiness.json";
import random from "../data/random.json";

const selectRandomText = topic => {
  return topic[Math.floor(Math.random() * topic.length)].content;
};

const NextRound = ({
  round,
  setRound,
  addNotification,
  infectionRate,
  setInfectionRate
}) => {
  const nextRound = () => {
    const tomorrow = round + 1;
    setRound(tomorrow);

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
    <Container>
      <>
        <Decision
          infectionRate={infectionRate}
          setInfectionRate={setInfectionRate}
          round={round}
          nextRound={nextRound}
        />
      </>
    </Container>
  );
};

const Container = styled(Block)``;

export default NextRound;
