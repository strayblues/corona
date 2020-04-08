import React from "react";
import Block from "./common/Block";
import Notification from "./Notification";
import styled from "styled-components";

const NotificationPanel = ({
  notifications,
  setNotificationStatus,
  gameStart,
}) => {
  return (
    <Container className={gameStart ? "show top-container" : "hide"}>
      <div className="modal-dialog" role="document">
        <div className="modal-content modal-content-messages">
          <div className="modal-header">
            <h5 className="modal-title">הודעות</h5>
          </div>
          <div className="modal-body">
            <Scrollable>
              <Notification
                notifications={notifications}
                setNotificationStatus={setNotificationStatus}
              />
            </Scrollable>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default NotificationPanel;

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
