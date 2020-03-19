import React from "react";
import styled from "styled-components";

const randomTime = function() {
  const getRandomInRange = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const randomMinute = function() {
    let minuteDec = getRandomInRange(0, 6);
    let minuteSec = getRandomInRange(0, 10);
    return ":" + minuteDec.toString() + minuteSec.toString();
  };

  let randomMorningTime = getRandomInRange(6, 12) + randomMinute();
  let randomAfternoonTime = getRandomInRange(12, 17) + randomMinute();
  let randomEveningTime = getRandomInRange(17, 24) + randomMinute();

  return [randomMorningTime, randomAfternoonTime, randomEveningTime];
};

const Time = ({ round, hour }) => {
  const getDay = function() {
    return round;
  };

  const day = "יום " + getDay() + ", ";
  // match notification number 0-2, assuming 3 each day
  // const hour = randomTime()[0];

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
export { randomTime };
