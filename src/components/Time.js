import React from "react";
import styled from "styled-components";

const getRandomTime = function () {
  const getRandomInRange = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const getRandomMinute = function () {
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
  const getDay = function () {
    return round;
  };
  const day = "יום " + getDay();

  return (
    <Container>
      <Day>{day}</Day>
      <Hour>{hour}</Hour>
    </Container>
  );
};

export default Time;
export { getRandomTime };

const Day = styled.div`
  color: white;
`;
const Hour = styled.div`
  color: white;
`;
const Container = styled.div`
  background: #f09047;
  padding: 2px 6px;
  font-weight: 700;
  line-height: 1.3;
  font-size: 90%;
  width: 12%;
  text-align: center;
  box-shadow: 1px 1px 1px 1px #888;
  @media screen and (max-device-width: 812px) {
    width: 15%;
    padding: 2px;
  }
`;
