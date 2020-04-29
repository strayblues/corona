import React from "react";
import styled from "styled-components";
import ConfirmButton from "./common/ConfirmButton";

const ChoicePanel = ({
  gameStart,
  updateState,
  action,
  setAction,
  setNationalHappiness,
  nationalHappiness,
  setEconomicState,
  economicState,
  setInfectionRate,
  infectionRate,
  setPatients,
  patients,
  setBeds,
  beds,
}) => {
  const readChoice = () => {
    const state = {
      beds: beds,
      patients: patients,
      nationalHappiness: nationalHappiness,
      economicState: economicState,
      infectionRate: infectionRate,
    };
    if (document.getElementById("immediate_action").checked) {
      const decisions = ["economy", "healthcare", "press_conf", "public_data"];
      let random_decision =
        decisions[Math.floor(Math.random() * decisions.length)];
      setAction(random_decision);
    } else if (document.getElementById("isolate").checked) {
      setAction("isolate");
    } else if (document.getElementById("surveil").checked) {
      setAction("surveil");
    } else if (document.getElementById("close").checked) {
      setAction("close");
    } else if (document.getElementById("skip").checked) {
      updateState(state);
    }
    setBeds(state.beds);
    setPatients(state.patients);
    setNationalHappiness(state.nationalHappiness);
    setEconomicState(state.economicState);
    setInfectionRate(state.infectionRate);
  };

  if (action === "initial_action") {
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
                    פעולה מיידית >>>
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
                    מדיניות: סגירת מוסדות ושירותים
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
                    <ConfirmButton handleClick={readChoice} />
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

const Container = styled.div`
  margin-bottom: -2.25em;
`;
const ActionType = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
