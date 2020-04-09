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
    if (action === "economy") {
      if (document.getElementById("economy_0").checked) {
        setNationalHappiness(nationalHappiness + 10);
        setEconomicState(economicState + 3);
      } else if (document.getElementById("economy_1").checked) {
        setNationalHappiness(nationalHappiness + 8);
        setEconomicState(economicState + 5);
      } else if (document.getElementById("economy_2").checked) {
        setNationalHappiness(nationalHappiness - 8);
        setEconomicState(economicState + 8);
      }
    } else if (action === "healthcare") {
      if (document.getElementById("healthcare_0").checked) {
        setEconomicState(economicState - 5);
      } else if (document.getElementById("healthcare_1").checked) {
        // setNumOfBeds(numOfBeds + 10);
        setEconomicState(economicState - 3);
      } else if (document.getElementById("healthcare_2").checked) {
        setEconomicState(economicState - 3);
        setNationalHappiness(nationalHappiness + 5);
      } else if (document.getElementById("healthcare_3").checked) {
        setEconomicState(economicState - 5);
        // increase known patients by 10%
      }
    } else if (action === "press_conf") {
      if (document.getElementById("press_conf_0").checked) {
        setNationalHappiness(nationalHappiness + 3);
        setInfectionRate(setInfectionRate - 0.2);
      } else if (document.getElementById("press_conf_1").checked) {
        setNationalHappiness(nationalHappiness - 3);
        setInfectionRate(setInfectionRate - 0.1);
      } else if (document.getElementById("press_conf_2").checked) {
        setNationalHappiness(nationalHappiness + 5);
      } else if (document.getElementById("press_conf_3").checked) {
        setNationalHappiness(nationalHappiness + 5);
      }
    } else if (action === "public_data") {
      if (document.getElementById("public_data_0").checked) {
        setNationalHappiness(nationalHappiness + 5);
      } else if (document.getElementById("public_data_1").checked) {
        setNationalHappiness(nationalHappiness + 3);
      } else if (document.getElementById("public_data_2").checked) {
        if (nationalHappiness < 50) {
          setNationalHappiness(nationalHappiness - 4);
        } else {
          setNationalHappiness(nationalHappiness + 4);
        }
      }
    } else if (action === "isolate") {
      if (document.getElementById("policy_isolate_0").checked) {
        setInfectionRate(0.3);
      } else if (document.getElementById("policy_isolate_1").checked) {
        setInfectionRate(0.3);
      } else if (document.getElementById("policy_isolate_2").checked) {
        setInfectionRate(0.2);
        setEconomicState(economicState - 3);
      } else if (document.getElementById("policy_isolate_3").checked) {
        setEconomicState(economicState - 5);
        setInfectionRate(0.15);
      }
    } else if (action === "surveil") {
      if (document.getElementById("policy_surveil_0").checked) {
        setInfectionRate(infectionRate * 0.9);
      } else if (document.getElementById("policy_surveil_1").checked) {
        setInfectionRate(infectionRate * 0.8);
        setNationalHappiness(nationalHappiness - 3);
      } else if (document.getElementById("policy_surveil_2").checked) {
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
        setNationalHappiness(nationalHappiness - 12);
        setInfectionRate(infectionRate * 0.8);
      } else if (document.getElementById("policy_close_9").checked) {
        setNationalHappiness(nationalHappiness - 6);
        setInfectionRate(infectionRate * 0.88);
      }
    }
    updateState();
    setAction("initial_action");
  };

  let component;
  if (action === "isolate") {
    component = <PolicyIsolate />;
  } else if (action === "surveil") {
    component = <PolicySurveil />;
  } else if (action === "close") {
    component = <PolicyClose />;
  } else if (action === "economy") {
    component = <Economy />;
  } else if (action === "healthcare") {
    component = <Healthcare />;
  } else if (action === "press_conf") {
    component = <PressConf />;
  } else if (action === "public_data") {
    component = <PublicData />;
  }

  if (action !== "initial_action") {
    return (
      <Container className={gameStart ? "show top-container" : "hide"}>
        <div className="modal-dialog" role="document">
          <div className="modal-content modal-content-messages">
            <Decision>
              <div className="modal-body decision">{component}</div>
              <div className="modal-footer decision">
                <ConfirmButton handleClick={implementPolicyEffect} />
              </div>
            </Decision>
          </div>
        </div>
      </Container>
    );
  } else {
    return null;
  }
};
export default DecisionPanel;

const Container = styled.div`
  margin-top: 10px;
`;
const Decision = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
