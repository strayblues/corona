import React, { useState } from "react";
import banner from "../images/benner08-sm.png";
import styled from "styled-components";
import SocialLinks from "./common/SocialLinks";
import NewGame from "./NewGame";
import Details from "./Details";
import NotificationArea from "./NotificationArea";
import NextRound from "./NextRound";
import ImmediateAction from "./ImmediateAction";
import Policy from "./Policy";
import ChoicePanel from "./ChoicePanel";
import DecisionPanel from "./DecisionPanel";
import Debug from "./Debug";
import { getRandomTime } from "./Time";
import economy from "../data/economy.json";
import happiness from "../data/happiness.json";
import random from "../data/random.json";
import initialPatients from "../data/patients.json";

function CoronaApp() {
  const [gameStart, setGameStart] = useState(false);
  const [round, setRound] = useState(1);
  const [notifications, setNotifications] = useState([
    {
      isNew: true,
      day: 1,
      hour: "7:00",
      content:
        "בוקר טוב, ראש הממשלה. מבין 8.7 מיליון תושבים, ידועים לנו כרגע 7 חולי קורונה שחזרו מספינת הדיאמונד פרינסס. אנחנו ממתינים להוראותיך איך כדאי להתקדם. בכל סיבוב תוכל לבצע פעולה אחת, ותקבל הודעות מגורמים שונים במערכת הפוליטית ומחוץ לה. האם תצליח לנצח את המגיפה בלי שהמדינה תקרוס? בוא נגלה!"
    }
  ]);

  const setNotificationStatus = function() {
    for (let i = 0; i < notifications.length; i++) {
      notifications[i].isNew = false;
    }
    setNotifications(notifications.slice());
  };
  const [infectionRate, setInfectionRate] = useState(0.3);
  const [economicState, setEconomicState] = useState(80);
  const [nationalHappiness, setNationalHappiness] = useState(80);
  const [patients, setPatients] = useState(initialPatients);

  const addPatients = newPatients => {
    setPatients(patients.concat(newPatients));
  };

  // const [healthcareSystem, setHealthcareSystem] = useState(10);
  // const [gameOver, setGameOver] = useState(false);

  // const setNumPatients = function() {
  //   for (let i = 0; i < patients.length; i++) {
  //     patients[i].isNew = false;
  // }

  const addNotification = notification => {
    setNotifications(notifications.concat(notification));
  };

  const selectRandomText = topic => {
    return topic[Math.floor(Math.random() * topic.length)].content;
  };

  const addUknownPatients = () => {
    let isolatedPatients = 0;
    let unIsolatedPatients = 0;
    let unknownWithNoSymptoms = 0;
    for (let i = 0; i < patients.length; i++) {
      if (patients[i].isolated) {
        isolatedPatients++;
      } else {
        unIsolatedPatients++;
      }
    }
    isolatedPatients = isolatedPatients * (infectionRate / 10);
    unIsolatedPatients = unIsolatedPatients * infectionRate;
    unknownWithNoSymptoms = Math.floor(isolatedPatients + unIsolatedPatients);
    if (unknownWithNoSymptoms >= 1) {
      let newPatients = [];
      for (let i = 0; i < unknownWithNoSymptoms; i++) {
        newPatients.push({
          infectionDay: round,
          healthCond: "no symptoms",
          known: false,
          isolated: false
        });
      }
      addPatients(newPatients);
    }
  };

  const implementPolicyEffect = () => {
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

    if (document.getElementById("policy_surveillance_0").checked) {
      setInfectionRate(infectionRate * 0.9);
    } else if (document.getElementById("policy_surveillance_1").checked) {
      setInfectionRate(infectionRate * 0.8);
      setNationalHappiness(nationalHappiness - 3);
    } else if (document.getElementById("policy_surveillance_2").checked) {
      setInfectionRate(infectionRate * 0.7);
      setNationalHappiness(nationalHappiness - 5);
    }

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
  };

  const createNotifications = () => {
    const tomorrow = round + 1;
    const [morning, afternoon, evening] = getRandomTime();

    addNotification([
      {
        isNew: true,
        day: tomorrow,
        hour: morning,
        content: selectRandomText(economy) //healthcare
      },
      {
        isNew: true,
        day: tomorrow,
        hour: afternoon,
        content: selectRandomText(random)
      },
      {
        isNew: true,
        day: tomorrow,
        hour: evening,
        content: selectRandomText(happiness)
      }
    ]);
  };

  function updateState() {
    implementPolicyEffect();
    addUknownPatients();

    const tomorrow = round + 1;
    setRound(tomorrow);

    createNotifications();
  }

  return (
    <Container>
      <Banner src={banner} alt="Corona virus" />
      <NewGame gameStart={gameStart} setGameStart={setGameStart} />
      <Game>
        <Content className={gameStart ? "show" : "hide"}>
          {/* <Debug
            infectionRate={infectionRate}
            economicState={economicState}
            nationalHappiness={nationalHappiness}
            patients={patients}
          /> */}
          <Details round={round} />
          <ChoicePanel gameStart={gameStart} updateState={updateState} />
        </Content>

        <Content>
          <DecisionPanel gameStart={gameStart} updateState={updateState} />
        </Content>
        <Content>
          <NotificationArea
            gameStart={gameStart}
            notifications={notifications}
            setNotificationStatus={setNotificationStatus}
          />
        </Content>
        {/* <SocialLinks /> */}
      </Game>
    </Container>
  );
}
export default CoronaApp;

const Content = styled.div`
  min-height: 100%;
  /* padding: 20px 4px; */
  /* padding-bottom: 50px; */
  font-size: 90%;
  line-height: 1.3;
  margin-top: -24px;
`;
const Game = styled.div`
  display: flex;
  flex-direction: column;
`;
const Banner = styled.img`
  width: 100vw;
  background: linear-gradient(
    to right,
    #b265d6,
    #dd2581,
    #b265d6,
    #46a5a3,
    #46a5a3,
    #46a5a3
  );
`;
const Container = styled.div`
  direction: rtl;
`;
