import React, { useEffect } from "react";
import styled from "styled-components";

const setFadeoutTime = function(time) {
  const timer = setTimeout(() => {
    setFadeoutTime(time);
  }, time);
  return () => clearTimeout(timer);
};

const getRandomTime = function() {
  const getRandomInRange = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const getRandomMinute = function() {
    let minuteDec = getRandomInRange(0, 6);
    let minuteSec = getRandomInRange(0, 10);
    return ":" + minuteDec.toString() + minuteSec.toString();
  };

  let randomMorningTime = getRandomInRange(6, 12) + getRandomMinute();
  let randomAfternoonTime = getRandomInRange(12, 17) + getRandomMinute();
  let randomEveningTime = getRandomInRange(17, 24) + getRandomMinute();

  return [randomMorningTime, randomAfternoonTime, randomEveningTime];
};

const Time = ({ round, hour }) => {
  const getDay = function() {
    return round;
  };

  const day = "יום " + getDay() + ", ";

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
export { getRandomTime };
export { setFadeoutTime };
