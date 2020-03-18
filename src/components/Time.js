import React from "react";
import styled from "styled-components";

const Time = (day, hour, rand) => {
  const getDay = function() {
    return 3; // TODO: track game rounds
  };

  const randomTime = function() {
    const getRandomInRange = function(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    };

    let minuteDec = getRandomInRange(0, 5);
    let minuteSec = getRandomInRange(0, 9);
    let randomMinute = ":" + minuteDec.toString() + minuteSec.toString();
    let randomMorningTime = getRandomInRange(6, 11) + randomMinute;
    let randomAfternoonTime = getRandomInRange(12, 16 + randomMinute);
    let randomEveningTime = getRandomInRange(17, 23) + randomMinute;

    return [randomMorningTime, randomAfternoonTime, randomEveningTime];
  };

  day = "יום " + getDay() + ", ";
  hour = randomTime()[0]; // match notification number 0-2, assuming 3 each day

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
