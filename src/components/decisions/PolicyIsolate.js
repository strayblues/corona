import React from "react";
import styled from "styled-components";
import Choice from "../common/SingleChoice";
import Title from "../common/ChoiceTitle";

const PolicyIsolate = () => {
  return (
    <Container className={"decision"}>
      <Title title={"מדיניות הבידוד"} />
      <Choice option={"בלי בידוד חובה"} id={"policy_isolate_0"} />
      <Choice
        option={"לבודד ל-14 יום חולים סימפטומטיים ומי שהיה במגע עם חולה"}
        id={"policy_isolate_1"}
      />
      <Choice
        option={
          "לבודד ל-14 יום חולים סימפטומטיים, מי שהיה במגע עם חולה וכל מי שחוזר מחו״ל"
        }
        id={"policy_isolate_2"}
      />
    </Container>
  );
};

export default PolicyIsolate;

const Container = styled.div``;
