import React from "react";
import styled from "styled-components";
import NextRound from "./NextRound";

const ChoicePanel = ({
  gameStart,
  setGameStart,
  handleGameStart,
  updateState,
  action,
  actionChanged = true
}) => {
  if (action === "initialAction") {
    return (
      <Container className={gameStart ? "show top-container" : "hide"}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">פעולה</h5>
            </div>
            <div className="modal-body">
              <ActionType>
                <div className="form-check">
                  <input
                    type="radio"
                    name="action_type"
                    className="form-check-input"
                    id="immediate_action"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="immediate_action"
                  >
                    פעולה מיידית
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="action_type"
                    className="form-check-input"
                    id="isolate"
                  />
                  <label className="form-check-label" htmlFor="isolate">
                    מדיניות: בידוד
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    name="action_type"
                    className="form-check-input"
                    id="surveil"
                  />
                  <label className="form-check-label" htmlFor="surveil">
                    מדיניות: מעקב אלקטרוני
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    name="action_type"
                    className="form-check-input"
                    id="close"
                  />
                  <label className="form-check-label" htmlFor="close">
                    מדיניות: מוסדות ושירותים
                  </label>
                </div>

                <div className="form-check">
                  <input
                    type="radio"
                    name="action_type"
                    className="form-check-input"
                    id="skip"
                  />
                  <label className="form-check-label" htmlFor="skip">
                    לדלג למחר
                  </label>
                  <div className="modal-footer choice">
                    <NextRound updateState={updateState} />
                  </div>
                </div>
              </ActionType>
            </div>
          </div>
        </div>
      </Container>
    );
  } else {
    return null;
  }
};

export default ChoicePanel;

const Container = styled.div``;
const ActionType = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
