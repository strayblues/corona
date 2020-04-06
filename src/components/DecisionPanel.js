import React from "react";
import styled from "styled-components";
import ConfirmButton from "./common/ConfirmButton";
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
  setAction,
  infectionRate,
  setInfectionRate,
  economicState,
  setEconomicState,
  nationalHappiness,
  setNationalHappiness,
}) => {
  const implementPolicyEffect = () => {
    if (action === "isolate") {
      if (document.getElementById("policy_isolation_0").checked) {
        setInfectionRate(0.3);
      } else if (document.getElementById("policy_isolation_1").checked) {
        setInfectionRate(0.3);
      } else if (document.getElementById("policy_isolation_2").checked) {
        setInfectionRate(0.2);
        setEconomicState(economicState - 3);
      } else if (document.getElementById("policy_isolation_3").checked) {
        setEconomicState(economicState - 5);
        setInfectionRate(0.15);
      }
    } else if (action === "surveil") {
      if (document.getElementById("policy_surveillance_0").checked) {
        setInfectionRate(infectionRate * 0.9);
      } else if (document.getElementById("policy_surveillance_1").checked) {
        setInfectionRate(infectionRate * 0.8);
        setNationalHappiness(nationalHappiness - 3);
      } else if (document.getElementById("policy_surveillance_2").checked) {
        setInfectionRate(infectionRate * 0.7);
        setNationalHappiness(nationalHappiness - 5);
      }
    } else if (action === "close") {
      if (document.getElementById("policy_close_0").checked) {
        setEconomicState(economicState - 5);
        setNationalHappiness(nationalHappiness - 3);
        setInfectionRate(infectionRate * 0.9);
      } else if (document.getElementById("policy_close_1").checked) {
        setEconomicState(economicState - 3);
        setNationalHappiness(nationalHappiness - 3);
        setInfectionRate(infectionRate * 0.9);
      } else if (document.getElementById("policy_close_2").checked) {
        setEconomicState(economicState - 5);
        setNationalHappiness(nationalHappiness - 3);
        setInfectionRate(infectionRate * 0.85);
      } else if (document.getElementById("policy_close_3").checked) {
        setEconomicState(economicState - 7);
        setInfectionRate(infectionRate * 0.8);
      } else if (document.getElementById("policy_close_4").checked) {
        setEconomicState(economicState - 2);
        setNationalHappiness(nationalHappiness - 3);
        setInfectionRate(infectionRate * 0.9);
      } else if (document.getElementById("policy_close_5").checked) {
        setEconomicState(economicState - 10);
        setNationalHappiness(nationalHappiness - 7);
        setInfectionRate(infectionRate * 0.99);
      } else if (document.getElementById("policy_close_6").checked) {
        setEconomicState(economicState - 8);
        setNationalHappiness(nationalHappiness - 5);
        setInfectionRate(infectionRate * 0.99);
      } else if (document.getElementById("policy_close_7").checked) {
        setNationalHappiness(nationalHappiness - 7);
        setInfectionRate(infectionRate * 0.8);
      } else if (document.getElementById("policy_close_8").checked) {
        setNationalHappiness(nationalHappiness - 15);
        setInfectionRate(infectionRate * 0.8);
      } else if (document.getElementById("policy_close_9").checked) {
        setNationalHappiness(nationalHappiness - 6);
        setInfectionRate(infectionRate * 0.88);
      }
    }
    updateState();
  };

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
                <ConfirmButton handleClick={implementPolicyEffect} />
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
