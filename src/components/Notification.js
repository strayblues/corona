import React from "react";
import styled from "styled-components";
import data from "../data/notifications.json";
import Time from "./Time";

const Notification = ({ round }) => {
  return (
    <Container>
      {data.reverse().map((notification, index) => {
        return (
          <>
            <Content>
              <StyledTime round={round}></StyledTime>
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
  padding: 6px 12px;
  padding-top: 0;
  margin: 2px 1px;
  background: white;
  box-shadow: 0 1px 1px 0 #888;
`;

export default Notification;
