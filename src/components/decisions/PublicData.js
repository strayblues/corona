import React from "react";
import styled from "styled-components";
import Choice from "../common/MultipleChoice";
import Title from "../common/ChoiceTitle";

const PublicData = () => {
  return (
    <Container className={"decision"}>
      <Title title={"מידע לציבור (בחירה מרובה)"} />
      <Choice option={"שיתוף כל התחקירים האפידמיולוגים"} id={"public_data_0"} />
      <Choice option={"שיתוף מספר החולים והמאושפזים"} id={"public_data_1"} />
      <Choice
        option={"שיתוף כמה בדיקות יש ומה מצב מערכת הבריאות"}
        id={"public_data_2"}
      />
    </Container>
  );
};

export default PublicData;

const Container = styled.div``;
