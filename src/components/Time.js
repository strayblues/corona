import React from "react";
import styled from "styled-components";

const Time = ({ round }) => {
  const getDay = function() {
    return round;
  };

  const randomTime = function() {
    const getRandomInRange = function(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    };

    let minuteDec = getRandomInRange(0, 6);
    let minuteSec = getRandomInRange(0, 10);
    let randomMinute = ":" + minuteDec.toString() + minuteSec.toString();
    let randomMorningTime = getRandomInRange(6, 12) + randomMinute;
    let randomAfternoonTime = getRandomInRange(12, 17) + randomMinute;
    let randomEveningTime = getRandomInRange(17, 24) + randomMinute;

    return [randomMorningTime, randomAfternoonTime, randomEveningTime];
  };

  const day = "יום " + getDay() + ", ";
  const hour = randomTime()[0]; // match notification number 0-2, assuming 3 each day

  return (
    <Container>
      <Content>
        <Day>{day}</Day>
        <Hour>{hour}</Hour>
      </Content>
    </Container>
  );
};

const Day = styled.span``;
const Hour = styled.span``;
const Container = styled.div`
  color: blue;
  margin-bottom: 3px;
  font-size: 90%;
`;
const Content = styled.span``;

export default Time;
