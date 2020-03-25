import React, { useEffect } from "react";
import styled from "styled-components";
import Time from "./Time";
// import { dom } from "@fortawesome/fontawesome-svg-core";
// import { fab } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
                <NotificationIcon>
                  <i className="fa fa-envelope fa-lg" aria-hidden="true"></i>
                </NotificationIcon>
                <NotificationContent>
                  {notification.content}
                </NotificationContent>
                <NotificationTime
                  round={notification.day}
                  hour={notification.hour}
                ></NotificationTime>
              </Content>
            </>
          );
        })
        .reverse()}
    </Container>
  );
};

const Container = styled.div``;
const Content = styled.div`
  display: flex;
  padding: 6px 12px;
  padding-top: 0;
  margin: 2px 1px;
  box-shadow: 0 1px 1px 0 #888;
`;

const NotificationTime = styled(Time)``;
const NotificationIcon = styled.div`
  margin: 7px 0 0 10px;
`;
const NotificationContent = styled.div`
  flex: 1;
  margin-top: 6px;
`;

export default Notification;
