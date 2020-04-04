import React from "react";
import styled from "styled-components";

const ChoiceTitle = ({ title }) => {
  return (
    <Container>
      <div className="card-header" id="headingTwo">
        <h5 className="mb-0">
          <button className="btn btn-purple title">{title}</button>
        </h5>
      </div>
    </Container>
  );
};

export default ChoiceTitle;

const Container = styled.div`
  font-family: "Alef", sans-serif;
`;
