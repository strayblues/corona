import React from "react";
import styled from "styled-components";
import Choice from "../common/SingleChoice";
import Title from "../common/ChoiceTitle";

const PolicySurveil = () => {
  return (
    <Container className={"decision"}>
      <Title title={"מעקב אלקטרוני"} />
      <Choice option={"על חולים"} id={"policy_surveil_0"} />
      <Choice option={"על חולים ומי שהיה איתם במגע"} id={"policy_surveil_1"} />
      <Choice option={"על כולם"} id={"policy_surveil_2"} />
    </Container>
  );
};

export default PolicySurveil;

const Container = styled.div``;
