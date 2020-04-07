import React, { useState } from "react";
import banner from "../images/benner08-sm.png";
import styled from "styled-components";
import Like from "./common/Like";
import Share from "./common/Share";
import NewGame from "./NewGame";
import Details from "./Details";
import NotificationArea from "./NotificationArea";
// import ConfirmButton from "../common/ConfirmButton";
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
  const [action, setAction] = useState("initial_action"); // "initial_action", "immediate_action" ("economy", "health_care", "Press_conf", "public_data"), "close", "isolate", "surveil", "skip"
  const [notifications, setNotifications] = useState([
    {
      isNew: true,
      day: 1,
      hour: "7:00",
      content:
        "בוקר טוב, ראש הממשלה. מבין 8.7 מיליון תושבים, ידועים לנו כרגע 7 חולי קורונה שחזרו מספינת הדיאמונד פרינסס. אנחנו ממתינים להוראותיך איך כדאי להתקדם. בכל סיבוב תוכל לבצע פעולה אחת, ותקבל הודעות מגורמים שונים במערכת הפוליטית ומחוץ לה. האם תצליח לנצח את המגיפה בלי שהמדינה תקרוס? בוא נגלה!",
    },
  ]);

  const setNotificationStatus = function () {
    for (let i = 0; i < notifications.length; i++) {
      notifications[i].isNew = false;
    }
    setNotifications(notifications.slice());
  };
  const [infectionRate, setInfectionRate] = useState(0.3);
  const [economicState, setEconomicState] = useState(80);
  const [nationalHappiness, setNationalHappiness] = useState(80);
  const [patients, setPatients] = useState(initialPatients);

  const addPatients = (newPatients) => {
    setPatients(patients.concat(newPatients));
  };

  // const [healthcareSystem, setHealthcareSystem] = useState(10);
  // const [gameOver, setGameOver] = useState(false);

  // const setNumPatients = function() {
  //   for (let i = 0; i < patients.length; i++) {
  //     patients[i].isNew = false;
  // }

  const addNotification = (notification) => {
    setNotifications(notifications.concat(notification));
  };

  const selectRandomText = (topic) => {
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
          isolated: false,
        });
      }
      addPatients(newPatients);
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
        content: selectRandomText(economy), //healthcare
      },
      {
        isNew: true,
        day: tomorrow,
        hour: afternoon,
        content: selectRandomText(random),
      },
      {
        isNew: true,
        day: tomorrow,
        hour: evening,
        content: selectRandomText(happiness),
      },
    ]);
  };

  function updateState() {
    addUknownPatients();

    const tomorrow = round + 1;
    setRound(tomorrow);

    createNotifications();

    // TODO: Revert to ChoicePanel
  }

  return (
    <Container>
      <Banner src={banner} alt="Corona virus" />
      <NewGame gameStart={gameStart} setGameStart={setGameStart} />
      <Game>
        <Content className={gameStart ? "show" : "hide"}>
          {/* <Content>
            <Like />
          </Content> */}
          <Debug
            infectionRate={infectionRate}
            economicState={economicState}
            nationalHappiness={nationalHappiness}
            patients={patients}
          />
          <Details round={round} />
          <ChoicePanel
            gameStart={gameStart}
            updateState={updateState}
            action={action}
            setAction={setAction}
          />
        </Content>
        <Content>
          <DecisionPanel
            gameStart={gameStart}
            updateState={updateState}
            action={action}
            setAction={setAction}
            infectionRate={infectionRate}
            setInfectionRate={setInfectionRate}
            economicState={economicState}
            setEconomicState={setEconomicState}
            nationalHappiness={nationalHappiness}
            setNationalHappiness={setNationalHappiness}
          />
        </Content>
        <Content>
          <NotificationArea
            gameStart={gameStart}
            notifications={notifications}
            setNotificationStatus={setNotificationStatus}
          />
        </Content>
        {/* <Content className={gameStart ? "show" : "hide"}>
          <Share />
        </Content> */}
      </Game>
    </Container>
  );
}
export default CoronaApp;

const Content = styled.div`
  min-height: 100%;
  font-size: 90%;
  line-height: 1.3;
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
