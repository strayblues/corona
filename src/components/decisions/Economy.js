import React from "react";
import styled from "styled-components";
import Choice from "../common/SingleChoice";
import Title from "../common/ChoiceTitle";

const Economy = () => {
  return (
    <Container className={"decision"}>
      <Title title={"מדיניות כלכלית"} />
      <Choice option={"אישור דחיית תשלומי משכנתאות"} id={"economy_0"} />
      <Choice option={"הקמת קרן לעסקים קטנים"} id={"economy_1"} />
      <Choice option={"הטלת מס קורונה"} id={"economy_2"} />
    </Container>
  );
};

export default Economy;

const Container = styled.div``;
