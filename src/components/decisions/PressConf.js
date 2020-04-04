import React from "react";
import styled from "styled-components";
import Choice from "../common/SingleChoice";
import Title from "../common/ChoiceTitle";

const PressConf = () => {
  return (
    <Container className={"decision"}>
      <Title title={"עריכת מסיבת עיתונאים ובה אחד מהבאים"} />
      <Choice option={"מסבירים על שטיפת ידיים"} id={"press_conf_0"} />
      <Choice option={"מסבירים על שמירת מרחק זה מזה"} id={"press_conf_1"} />
      <Choice option={"מעודדים את הציבור שמצבנו מצויין"} id={"press_conf_2"} />
      <Choice
        option={"אומרים שמצבנו לא משהו אבל חשוב להתאחד בזמנים כאלו"}
        id={"press_conf_3"}
      />
    </Container>
  );
};

export default PressConf;

const Container = styled.div``;
