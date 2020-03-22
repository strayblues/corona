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
        .map(notification => {
          return (
            <>
              <Content className={notification.isNew ? "incoming" : "old"}>
                <NotificationTime
                  round={notification.day}
                  hour={notification.hour}
                ></NotificationTime>
                <NotificationContent>
                  {notification.content}
                </NotificationContent>
              </Content>
            </>
          );
        })
        .reverse()}
    </Container>
  );
};

const NotificationTime = styled(Time)`
  background: #ccc;
  color: blue;
  margin-bottom: 3px;
  margin-top: 5px;
  margin-left: 10px;
  font-size: 100%;
`;
const NotificationContent = styled.div`
  justify-content: flex-start;
  margin-top: 6px;
`;
const Container = styled.div``;
const Content = styled.div`
  display: flex;
  padding: 6px 12px;
  padding-top: 0;
  margin: 2px 1px;
  box-shadow: 0 1px 1px 0 #888;
`;

export default Notification;
