import React from "react";
import styled from "styled-components";
import moment from "moment";

const Time = (day, hour) => {
  const getDay = function() {
    return 3; // TODO: track game rounds
  };

  day = "יום " + getDay() + ", ";
  hour = moment().format("LT");

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
