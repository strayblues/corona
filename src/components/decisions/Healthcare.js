import React from "react";
import styled from "styled-components";
import Choice from "../common/MultipleChoice";
import Title from "../common/ChoiceTitle";

const Healthcare = () => {
  return (
    <Container className={"decision"}>
      <Title title={"הזרמת כסף למערכת הבריאות לטובת אחד או יותר מהבאים"} />
      <Choice option={"מחקר על חיסון"} id={"healthcare_0"} />
      <Choice option={"רכישת מיטות אשפוז נוספות"} id={"healthcare_1"} />
      <Choice option={"שעות עבודה נוספות לרופאים"} id={"healthcare_2"} />
      <Choice option={"הגדלת מספר הבדיקות"} id={"healthcare_3"} />
    </Container>
  );
};

export default Healthcare;

const Container = styled.div``;
