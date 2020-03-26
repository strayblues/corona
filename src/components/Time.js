import React from "react";
import styled from "styled-components";

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
  const day = "יום " + getDay();

  return (
    <Container>
      <Content>
        <Day>{day}</Day>
        <Hour>{hour}</Hour>
      </Content>
    </Container>
  );
};

const Day = styled.div`
  color: white;
`;
const Hour = styled.div`
  color: white;
`;
const Container = styled.div`
  margin: 7px 8px 1px 0;
  background: #f09047;
  background: #ee6f9c;
  background: #9f5fd4;
  padding: 1px;
  border-radius: 2px;
  font-weight: 700;
  line-height: 1.3;
  font-size: 90%;
  height: 36px;
  width: 35px;
  text-align: center;
  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) {
    height: 37px;
  }
`;
const Content = styled.div``;

export default Time;
export { getRandomTime };
