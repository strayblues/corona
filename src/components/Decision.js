import React from "react";
import styled from "styled-components";

const Decision = ({ decision, option1, option2, option3, option4 }) => {
  return (
    <Container>
      <Topic>{decision}</Topic>
      <Options>
        <OptionsLine>
          <Clickable>{option1}</Clickable>
          <Clickable>{option2}</Clickable>
        </OptionsLine>
        <OptionsLine>
          <Clickable>{option3}</Clickable>
          <Clickable>{option4}</Clickable>
        </OptionsLine>
      </Options>
    </Container>
  );
};

const Topic = styled.p`
  margin: 0;
  text-align: center;
  padding: 10px 0 5px 0;
`;
const Options = styled.div``;
const OptionsLine = styled.div`
  display: flex;
`;
const Clickable = styled.button`
  width: 100%;
  padding: 8px;
  margin: 2px;
  background: #eee;
  box-shadow: 0 1px 1px 0 #888;
`;
const Container = styled.div`
  padding: 6px;
  padding-top: 0;
  margin: 8px 1px;
  background: white;
  box-shadow: 0 1px 1px 0 #888;
`;

export default Decision;
