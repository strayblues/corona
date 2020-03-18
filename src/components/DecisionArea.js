import React from "react";
import styled from "styled-components";
import Decision from "./Decision";
import data from "../data/decisions.json";
import Block from "./common/Block";

const DecisionArea = () => {
  return (
    <Container>
      <h4>הכרעות</h4>
      {data.map((decision, index) => {
        return (
          <>
            <Decision
              decision={decision.content}
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
