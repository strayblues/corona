import React from "react";
import Block from "./common/Block";
import Notification from "./Notification";
import styled from "styled-components";

const NotificationArea = ({ notifications, setNotificationStatus }) => {
  return (
    <Container>
      <h6>הודעות</h6>
      <Scrollable>
        <Notification
          notifications={notifications}
          setNotificationStatus={setNotificationStatus}
        />
      </Scrollable>
    </Container>
  );
};

const Container = styled(Block)`
  margin-top: 1em;
`;
const Scrollable = styled.div`
  overflow-y: scroll;
  max-height: 245px;
  @media (max-width: 768px) {
    max-height: 215px;
  }
`;

export default NotificationArea;
