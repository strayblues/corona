import React from "react";
import styled from "styled-components";
import NextRound from "./NextRound";
import ImmediateAction from "./ImmediateAction";
import Policy from "./Policy";
const DecisionPanel = ({ gameStart, setGameStart, updateState }) => {
  return (
    <Container className={gameStart ? "hide" : "hide"}>
      <Decision>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">החלטה</h5>
            </div>
            <div className="modal-body">
              <Policy />
              <ImmediateAction />
            </div>
            <div className="modal-footer">
              <NextRound updateState={updateState} />
            </div>
          </div>
        </div>
      </Decision>
    </Container>
  );
};
export default DecisionPanel;

const Container = styled.div`
  margin-top: 20px;
`;
const Decision = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
