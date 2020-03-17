import React from "react";
import styled from "styled-components";
import data from "../data/notifications.json";

const Notification = () => {
  return (
    <Container>
      {data.map((notification, index) => {
        return (
          <>
            <Content>{notification.content}</Content>
          </>
        );
      })}
    </Container>
  );
};

const Container = styled.div``;
const Content = styled.div`
  margin: 8px 1px;
  padding: 6px 8px;
  background: white;
  box-shadow: 0 2px 2px 0 #888;
`;

export default Notification;
