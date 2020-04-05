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

const DecisionPanel = ({
  gameStart,
  setGameStart,
  updateState,
  action,
  setAction
}) => {
  let component;
  if (action === "isolate") {
    component = <PolicyIsolate />;
  } else if (action === "surveil") {
    component = <PolicySurveil />;
  } else if (action === "close") {
    component = <PolicyClose />;
  } else if (action === "immediateAction") {
    // TODO: show 1 of 4 (perhaps at random)
    // don't repeat unless all were used
  }

  if (action !== "initialAction") {
    return (
      <Container className={gameStart ? "show top-container" : "hide"}>
        <Decision>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">החלטה</h5>
              </div>
              <div className="modal-body">
                {component}
                {/* <Economy show={false} />
              <Healthcare show={false} />
              <PressConf show={false} />
              <PublicData show={false} />*/}
              </div>
              <div className="modal-footer">
                <NextRound updateState={updateState} />
              </div>
            </div>
          </div>
        </Decision>
      </Container>
    );
  } else {
    return null;
  }
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
