import React, { useEffect } from "react";
import styled from "styled-components";
import Time from "./Time";

const Notification = ({ notifications, setNotificationStatus }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setNotificationStatus();
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <Container>
      {notifications
        .map((notification) => {
          return (
            <Content className={notification.isNew ? "incoming" : "old"}>
              <NotificationTime
                round={notification.day}
                hour={notification.hour}
              ></NotificationTime>
              <NotificationContent>{notification.content}</NotificationContent>
            </Content>
          );
        })
        .reverse()}
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
`;
const Content = styled.div`
  display: flex;
  margin: 2px 0;
  box-shadow: 0 1px 1px 0 #888;
  margin: 2px 6px;
`;

const NotificationTime = styled(Time)`
  flex: 1;
`;

const NotificationContent = styled.div`
  flex: 1;
  margin: 2px 6px;
`;

export default Notification;
