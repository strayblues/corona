import React from "react";
import styled from "styled-components";

const SingleChoice = ({ option, id }) => {
  return (
    <Container>
      <div className="form-check">
        <input
          type="radio"
          name="single-choice"
          className="form-check-input"
          id={id}
        />
        <label className="form-check-label" htmlFor={id}>
          {option}
        </label>
      </div>
    </Container>
  );
};

export default SingleChoice;

const Container = styled.div`
  font-family: "Alef", sans-serif;
`;
