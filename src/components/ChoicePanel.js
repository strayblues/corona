import React from "react";
import styled from "styled-components";
import ImmediateAction from "./ImmediateAction";
import Policy from "./Policy";
import NextRound from "./NextRound";

const ChoicePanel = ({
  gameStart,
  setGameStart,
  handleGameStart,
  updateState
}) => {
  return (
    <Container className={gameStart ? "show" : "hide"}>
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
                  id="action0"
                />
                <label className="form-check-label" htmlFor="action0">
                  פעולה מיידית
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="action_type"
                  className="form-check-input"
                  id="action1"
                />
                <label className="form-check-label" htmlFor="action1">
                  מדיניות: בידוד
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  name="action_type"
                  className="form-check-input"
                  id="action2"
                />
                <label className="form-check-label" htmlFor="action2">
                  מדיניות: מעקב אלקטרוני
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  name="action_type"
                  className="form-check-input"
                  id="action3"
                />
                <label className="form-check-label" htmlFor="action3">
                  מדיניות: מוסדות ושירותים
                </label>
              </div>

              <div className="form-check">
                <input
                  type="radio"
                  name="action_type"
                  className="form-check-input"
                  id="action4"
                />
                <label className="form-check-label" htmlFor="action4">
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
};

export default ChoicePanel;

const Container = styled.div``;
const ActionType = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
