import React, { useEffect } from "react";
import styled from "styled-components";
import Time from "./Time";

const Notification = ({ notifications, isNew, setIsNew }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsNew(false);
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <Container className={isNew ? "incoming" : "old"}>
      {notifications
        .map((notification, index) => {
          return (
            <>
              <Content>
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
