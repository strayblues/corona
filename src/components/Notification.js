import React from "react";
import styled from "styled-components";
import data from "../data/notifications.json";
import Block from "./common/Block";

const Notification = () => {
  return (
    <Container>
      <h4>הודעות</h4>
      {data.map((notification, index) => {
        return (
          <>
            <div>{notification.content}</div>
          </>
        );
      })}
    </Container>
  );
};

const Container = styled(Block)``;

export default Notification;
