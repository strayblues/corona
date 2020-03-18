import React from "react";
import styled from "styled-components";

const Decision = ({
  round,
  setRound,
  decision,
  option1,
  option2,
  option3,
  option4
}) => {
  function handleClick(item) {
    if (item === 1) {
      alert("option 1");
      // more ppl get infected
    } else if (item === 2) {
      alert("option 2");
    } else if (item === 3) {
      alert("option 3");
    } else if (item === 4) {
      alert("option 4");
    }
    // in any case, increase roundCount by 1 and start a new round
    setRound(round + 1);
    return round;
  }

  return (
    <Container>
      <Topic>{decision}</Topic>
      <Options>
        <OptionsLine>
          <Option onClick={e => handleClick(1)}>{option1}</Option>
          <Option onClick={e => handleClick(2)}>{option2}</Option>
        </OptionsLine>
        <OptionsLine>
          <Option onClick={e => handleClick(3)}>{option3}</Option>
          <Option onClick={e => handleClick(4)}>{option4}</Option>
        </OptionsLine>
        <OptionsLine>
          <Skip onClick={e => handleClick(5)}>
            <span role="img" aria-label="shrug">
              🤷🏼‍♂️
            </span>{" "}
            לדלג למחר
          </Skip>
        </OptionsLine>
      </Options>
    </Container>
  );
};

export default Decision;

const Topic = styled.p`
  margin: 0;
  text-align: center;
  padding: 10px 0 5px 0;
`;
const Options = styled.div`
  display: flex;
  flex-direction: column;
`;
const OptionsLine = styled.div`
  display: flex;
`;
const Option = styled.button`
  width: 100%;
  padding: 8px;
  margin: 2px;
  background: #eee;
  box-shadow: 0 1px 1px 0 #888;
`;
const Skip = styled(Option)``;
const Container = styled.div`
  padding: 6px;
  padding-top: 0;
  margin: 8px 1px;
  background: white;
  box-shadow: 0 1px 1px 0 #888;
`;
