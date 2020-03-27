import React from "react";
import styled from "styled-components";

const NextRound = ({ updateState }) => {
  return (
    <Container>
      <>
        <Next className="btn btn-primary" onClick={updateState}>
          אישור
        </Next>
      </>
    </Container>
  );
};

export default NextRound;

const Container = styled.div``;
const Next = styled.button``;
