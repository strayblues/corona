import React from "react";
import styled from "styled-components";
import Info from "./common/Info";

const NotificationArea = () => {
  return (
    <Container>
      <h4>הודעות</h4>
      <Day>
        <Info label={"יום "} content1={"1"}></Info>
      </Day>
      <Score>
        <Info label={"יש׳ך 80 "} content1={"נקודות"}></Info>
      </Score>
      <Source>
        <Info
          label={"הודעה מ"}
          content1={"משרד הבריאות"}
          content2={"המצב הוא ככה וככה"}
        ></Info>
      </Source>
    </Container>
  );
};

const Score = styled.span`
  color: red;
`;
const Source = styled.div`
  color: #666;
`;
const Day = styled.span`
  font-size: 80%;
  display: inline-block;
`;
const Container = styled.section`
  padding: 2em 1em;
  margin: 0;
  background: #eee;
  font-family: "Alef", sans-serif;
`;

export default NotificationArea;
