import React from "react";
import Block from "./common/Block";
import Notification from "./Notification";
import styled from "styled-components";

const NotificationArea = () => {
  return (
    <Container>
      <h4>הודעות</h4>
      <Scrollable>
        <Notification />
      </Scrollable>
    </Container>
  );
};

const Container = styled(Block)``;
const Scrollable = styled.div`
  overflow-y: scroll;
  height: 130px;
  box-shadow: 1px 1px 10px 2px #aaa;
`;

export default NotificationArea;
