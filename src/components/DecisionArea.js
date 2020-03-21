import React, { useEffect } from "react";
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
  addNotification,
  isNew,
  setIsNew
}) => {
  const nextRound = () => {
    const tomorrow = round + 1;
    setRound(tomorrow);
    setDecisionVisibility(false);
    const [morning, afternoon, evening] = randomTime();

    addNotification([
      {
        day: tomorrow,
        hour: morning,
        subject: "economy",
        content:
          "לשכת שר האוצר: ״מצבנו מעולם לא היה טוב יותר, ה-OECD מתקנא בנו.״"
      },
      {
        day: tomorrow,
        hour: afternoon,
        subject: "economy",
        content:
          "לשכת שר האוצר: ״מצבנו מעולם לא היה טוב יותר, ה-OECD מתקנא בנו.״"
      },
      {
        day: tomorrow,
        hour: evening,
        subject: "economy",
        content:
          "לשכת שר האוצר: ״מצבנו מעולם לא היה טוב יותר, ה-OECD מתקנא בנו.״"
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
              isNew={isNew}
              setIsNew={setIsNew}
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
