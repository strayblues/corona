import React from "react";
import styled from "styled-components";
import Decision from "./Decision";
import data from "../data/decisions.json";
import Block from "./common/Block";

const DecisionArea = () => {
  return (
    <Container>
      {data.map((decision, index) => {
        return (
          <>
            <h4>
              <span>מה לעשות בנושא </span>
              {decision.content}
              <span>?</span>
            </h4>

            <Decision
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
