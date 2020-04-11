import React, { useState } from "react";
import banner from "../images/banner11-sm.png";
import styled from "styled-components";
import Like from "./common/Like";
import Share from "./common/Share";
import NewGame from "./NewGame";
import GameOver from "./GameOver";
import Details from "./Details";
import NotificationPanel from "./NotificationPanel";
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
  const [gameOver, setGameOver] = useState(false);
  const [round, setRound] = useState(1);
  // actions: "initial_action", "immediate_action" ("economy",
  // "health_care", "Press_conf", "public_data"), "close", "isolate",
  // "surveil", "skip"
  const [action, setAction] = useState("initial_action");
  const [notifications, setNotifications] = useState([
    {
      isNew: true,
      day: 1,
      hour: "7:00",
      content:
        "בוקר טוב ראש הממשלה, מבין 8.7 מיליון תושבים, ידועים לנו כרגע 7 חולי קורונה שחזרו מספינת הדיאמונד פרינסס. אנו ממתינים להוראותיך כיצד להתקדם. בכל סיבוב ניתן יהיה לבצע פעולה אחת, ויתקבלו הודעות מגורמים שונים במערכת הפוליטית ומחוץ לה. האם תצליח/י לנצח את המגיפה בלי שהמדינה תקרוס?",
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

  const addUnknownPatients = () => {
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
    const [morning, afternoon] = getRandomTime();

    const selectTextByState = (topic, value) => {
      if (value > 89) {
        return topic[0].content;
      } else if (value > 79) {
        return topic[1].content;
      } else if (value > 69) {
        return topic[2].content;
      } else if (value > 59) {
        return topic[3].content;
      } else if (value > 49) {
        return topic[4].content;
      } else if (value > 39) {
        return topic[5].content;
      } else if (value > 29) {
        return topic[6].content;
      } else if (value > 19) {
        return topic[7].content;
      }
    };

    function selectMsg() {
      let msg = "";
      let count = round;
      if (count % 4 === 0) {
        msg = selectTextByState(economy, economicState);
      } else if (count % 4 === 1) {
        msg = selectTextByState(happiness, nationalHappiness);
      } else {
        msg = selectRandomText(random);
      }

      return msg;
    }

    function getKnownPatients() {
      let knownPatients = 0;
      for (let i = 0; i < patients.length; i++) {
        if (patients[i].known) {
          knownPatients++;
        }
      }
      return knownPatients;
    }

    addNotification([
      {
        isNew: true,
        day: tomorrow,
        hour: morning,
        content: "מספר החולים הידועים: " + getKnownPatients(),
        // TODO: add num of dead, etc.
      },
      {
        isNew: true,
        day: tomorrow,
        hour: afternoon,
        content: selectMsg(),
      },
      // {
      //   isNew: true,
      //   day: tomorrow,
      //   hour: evening,
      //   content: selectMsg(),
      // },
    ]);
  };

  function addRandom(state) {
    // TODO: this happens instead of other effects instead of additionally
    let add_to_e = Math.random() < 0.3 ? 0 : Math.random() < 0.7 ? 1 : 2;
    let add_to_h = Math.random() < 0.3 ? -1 : Math.random() < 0.7 ? 1 : 2;
    state.economicState = state.economicState + add_to_e;
    state.nationalHappiness = state.nationalHappiness + add_to_h;
  }

  function keepInRange(state) {
    if (state.nationalHappiness >= 100) {
      state.nationalHappiness = 100;
      alert("happiness: " + nationalHappiness);
      console.log(nationalHappiness);
    }
    if (state.economicState >= 100) {
      state.conomicState = 100;
    }
    if (nationalHappiness <= 0) {
      state.nationalHappiness = 0;
    }
    if (setEconomicState <= 0) {
      state.conomicState = 0;
    }
  }

  function isGameOver(state) {
    if (
      patients.length < 1 ||
      state.economicState < 1 ||
      state.nationalHappiness < 1
    ) {
      setGameStart(false);
      setGameOver(true);
    }
  }

  function updateState(state) {
    isGameOver(state);
    addUnknownPatients(); // actually known Ps
    addRandom(state);
    const tomorrow = round + 1;
    keepInRange(state);
    setRound(tomorrow);
    createNotifications();
  }

  return (
    <Container>
      <Banner src={banner} alt="Corona virus" />
      <NewGame
        gameStart={gameStart}
        setGameStart={setGameStart}
        gameOver={gameOver}
        setGameOver={setGameOver}
      />
      <GameOver
        // className={gameOver ? "show" : "hide"}
        gameStart={gameStart}
        setGameStart={setGameStart}
        gameOver={gameOver}
        setGameOver={setGameOver}
        patients={patients}
        economicState={economicState}
        nationalHappiness={nationalHappiness}
      />
      <Game>
        <Content className={gameStart ? "show" : "hide"}>
          {/* <Content>
            <Like />
          </Content> */}
          {/* <Debug
            infectionRate={infectionRate}
            economicState={economicState}
            nationalHappiness={nationalHappiness}
            patients={patients}
          /> */}
          <Details round={round} />
          <ChoicePanel
            gameStart={gameStart}
            updateState={updateState}
            action={action}
            setAction={setAction}
            nationalHappiness={nationalHappiness}
            setNationalHappiness={setNationalHappiness}
            economicState={economicState}
            setEconomicState={setEconomicState}
            infectionRate={setInfectionRate}
            setInfectionRate={setInfectionRate}
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
          <NotificationPanel
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
