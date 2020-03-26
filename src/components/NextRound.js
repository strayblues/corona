import React from "react";
import styled from "styled-components";

const NextRound = ({ handleClick }) => {
  return (
    <Container>
      <>
        <Next className="btn btn-primary" onClick={handleClick}>
          אישור
        </Next>
      </>
    </Container>
  );
};

export default NextRound;

const Container = styled.div``;
const Next = styled.button``;
