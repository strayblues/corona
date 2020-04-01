import React from "react";
import styled from "styled-components";
import NextRound from "./NextRound";
import ImmediateAction from "./ImmediateAction";
import Policy from "./Policy";
const DecisionPanel = ({ gameStart, setGameStart, updateState }) => {
  return (
    <Container>
      <Decision>
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">פעולות אפשריות:</h5>
            </div>
            <div class="modal-body">
              <ImmediateAction />
              <Policy />
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
