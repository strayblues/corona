import React from "react";
import styled from "styled-components";
import ImmediateAction from "./ImmediateAction";
import Policy from "./Policy";

const ChoicePanel = ({ gameStart, setGameStart, handleGameStart }) => {
  return (
    <Container className={gameStart ? "show" : "hide"}>
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">פעולות אפשריות:</h5>
          </div>
          <div class="modal-body">
            <ActionType>
              <button
                type="button"
                className="btn btn-orange"
                onClick={handleGameStart}
              >
                פעולה מיידית
              </button>
              <button
                type="button"
                className="btn btn-lightblue"
                onClick={handleGameStart}
              >
                מדיניות: בידוד
              </button>
              <button
                type="button"
                className="btn btn-lightblue"
                onClick={handleGameStart}
              >
                מדיניות: מעקב אלקטרוני
              </button>
              <button
                type="button"
                className="btn btn-lightblue"
                onClick={handleGameStart}
              >
                מדיניות: פעילות מוסדות ושירותים
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleGameStart}
              >
                לדלג למחר
              </button>
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
