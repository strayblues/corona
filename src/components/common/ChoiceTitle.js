import React from "react";
import styled from "styled-components";

const ChoiceTitle = ({ title }) => {
  return (
    <Container>
      <h5 className="modal-title">{title}</h5>
    </Container>
  );
};

export default ChoiceTitle;

const Container = styled.div`
  font-family: "Alef", sans-serif;
`;
