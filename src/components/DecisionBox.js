import React from "react";
import styled from "styled-components";
import Decision from "./common/Decision";

const DecisionBox = () => {
  return (
    <Container>
      <h4>החלטות</h4>
      <Decision
        question={"האם לבטל את הבידוד?"}
        answer1={"כה"}
        answer2={"נה"}
        answer3={"הסתה נגד ערבים"}
      />
    </Container>
  );
};

const Container = styled.section`
  padding: 4px 1em;
  margin: 0;
  margin-top: 0.5em;
  background: white;
  font-family: "Alef", sans-serif;
`;

export default DecisionBox;
