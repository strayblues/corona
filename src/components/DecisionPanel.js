import React from "react";
import styled from "styled-components";
import NextRound from "./NextRound";
import Economy from "./decisions/Economy";
import Healthcare from "./decisions/Healthcare";
import PressConf from "./decisions/PressConf";
import PublicData from "./decisions/PublicData";
import PolicyClose from "./decisions/PolicyClose";
import PolicyIsolate from "./decisions/PolicyIsolate";
import PolicySurveil from "./decisions/PolicySurveil";

const DecisionPanel = ({ gameStart, setGameStart, updateState }) => {
  return (
    <Container className={gameStart ? "show" : "hide"}>
      <Decision>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">החלטה</h5>
            </div>
            <div className="modal-body">
              <Economy />
              <Healthcare />
              <PressConf />
              <PublicData />
              <PolicyClose />
              <PolicyIsolate />
              <PolicySurveil />
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
