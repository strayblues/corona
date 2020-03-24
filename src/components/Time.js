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
  background: #f08080;
  background: #cc304e;
  padding: 4px;
  border-radius: 2px;
  font-weight: 700;
  font-size: 105%;
  height: 48px;
  width: 48px;
  text-align: center;
`;
const Content = styled.div``;

export default Time;
export { getRandomTime };
