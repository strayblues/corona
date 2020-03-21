import React from "react";
import Block from "./common/Block";
import Notification from "./Notification";
import styled from "styled-components";

const NotificationArea = ({ notifications, isNew, setIsNew }) => {
  return (
    <Container>
      <h5>התראות</h5>
      <Scrollable>
        <Notification
          notifications={notifications}
          isNew={isNew}
          setIsNew={setIsNew}
        />
      </Scrollable>
    </Container>
  );
};

const Container = styled(Block)``;
const Scrollable = styled.div`
  overflow-y: scroll;
  max-height: 240px;
  @media (max-width: 768px) {
    max-height: 210px;
  }
`;

export default NotificationArea;
