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
        .map((notification, index) => {
          return (
            <>
              <Content className={notification.isNew ? "incoming" : "old"}>
                <StyledTime
                  round={notification.day}
                  hour={notification.hour}
                ></StyledTime>
                <div>{notification.content}</div>
              </Content>
            </>
          );
        })
        .reverse()}
    </Container>
  );
};

const StyledTime = styled(Time)``;
const Container = styled.div``;
const Content = styled.div`
  padding: 6px 12px;
  padding-top: 0;
  margin: 2px 1px;
  box-shadow: 0 1px 1px 0 #888;
`;

export default Notification;
