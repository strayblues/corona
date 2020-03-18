import React from "react";
import styled from "styled-components";

function handleClick() {
  if (this.option1) {
    alert("1");
    // handleOption1();
    // more ppl get infected
  } else if (this.option2) {
    alert("2");
    // handleOption2();
  } else if (this.option3) {
    alert("3");
    // handleOption3();
  } else if (this.option4) {
    alert("4");
    // handleOption4();
  }

  // in any case, increase roundCount by 1 and start a new round
}

const round = 4; // what dis?

function handleSkip() {
  round.setState(this.newRound);
}
const Decision = ({ decision, option1, option2, option3, option4 }) => {
  return (
    <Container>
      <Topic>{decision}</Topic>
      <Options>
        <OptionsLine>
          <Option onClick={handleClick}>{option1}</Option>
          <Option onClick={handleClick}>{option2}</Option>
        </OptionsLine>
        <OptionsLine>
          <Option onClick={handleClick}>{option3}</Option>
          <Option onClick={handleClick}>{option4}</Option>
        </OptionsLine>
        <OptionsLine>
          <Skip onClick={handleSkip}>
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

export default Decision;
