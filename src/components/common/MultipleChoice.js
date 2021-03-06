import React from "react";
import styled from "styled-components";

const MultipleChoice = ({ option, id }) => {
  return (
    <Container>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id={id} />
        <label className="form-check-label" htmlFor={id}>
          {option}
        </label>
      </div>
    </Container>
  );
};

export default MultipleChoice;

const Container = styled.div`
  font-family: "Alef", sans-serif;
`;
