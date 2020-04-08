import React from "react";
import styled from "styled-components";
import Choice from "../common/MultipleChoice";
import Title from "../common/ChoiceTitle";

const PolicyClose = () => {
  return (
    <Container className={"decision"}>
      <Title title={"סגירת מוסדות ושירותים (בחירה מרובה)"} />
      <TwoColumns>
        <Column>
          <Choice option={"בתי ספר יסודיים"} id={"policy_close_0"} />
          <Choice option={"תיכונים"} id={"policy_close_1"} />
          <Choice option={"גנים"} id={"policy_close_2"} />
          <Choice option={"תחבורה ציבורית"} id={"policy_close_3"} />
          <Choice option={"מסעדות"} id={"policy_close_4"} />
        </Column>
        <Column>
          <Choice option={"סופרמרקטים"} id={"policy_close_5"} />
          <Choice option={"תחנות דלק"} id={"policy_close_6"} />
          <Choice option={"בתי כנסת"} id={"policy_close_7"} />
          <Choice option={"בתי חולים"} id={"policy_close_8"} />
          <Choice option={"קופות חולים"} id={"policy_close_9"} />
        </Column>
      </TwoColumns>
    </Container>
  );
};

export default PolicyClose;

const Container = styled.div``;
const TwoColumns = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const Column = styled.div`
  width: 49%;
`;
