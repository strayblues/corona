import React from "react";
import styled from "styled-components";

const ConfirmButton = ({ handleClick }) => {
  return (
    <Container>
      <>
        <button className="btn btn-purple" onClick={handleClick}>
          אישור
        </button>
      </>
    </Container>
  );
};

export default ConfirmButton;

const Container = styled.div``;
