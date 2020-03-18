import React from "react";
import styled from "styled-components";
import data from "../data/notifications.json";
import Time from "./Time";

const Notification = () => {
  return (
    <Container>
      {data.reverse().map((notification, index) => {
        return (
          <>
            <Content>
              <StyledTime></StyledTime>
              <div>{notification.content}</div>
            </Content>
          </>
        );
      })}
    </Container>
  );
};

const StyledTime = styled(Time)``;
const Container = styled.div``;
const Content = styled.div`
  margin: 8px 1px;
  padding: 6px 8px;
  background: white;
  box-shadow: 0 1px 1px 0 #888;
`;

export default Notification;
