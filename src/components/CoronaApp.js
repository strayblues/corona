import React, { useState } from "react";
import banner from "../images/banner-sm.png";
import styled from "styled-components";
// import Like from "./common/Like";
import Share from "./common/Share";
import NewGame from "./NewGame";
import GameOver from "./GameOver";
import Details from "./Details";
import NotificationPanel from "./NotificationPanel";
import ChoicePanel from "./ChoicePanel";
import DecisionPanel from "./DecisionPanel";
// eslint-disable-next-line
import Debug from "./Debug";
import { getRandomTime } from "./Time";
import economy from "../data/economy.json";
import happiness from "../data/happiness.json";
import random from "../data/random.json";
import DailyReport from "./DailyReport";

function CoronaApp() {
  const POPULATION = 8700000;
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [round, setRound] = useState(1);
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
  const [beds, setBeds] = useState(200);
  const [infectionRate, setInfectionRate] = useState(0.3);
  const [economicState, setEconomicState] = useState(80);
  const [nationalHappiness, setNationalHappiness] = useState(80);
  const [patients, setPatients] = useState(createPatients());

  function createPatients() {
    return [
      {
        infectionDay: 0,
        healthCond: "no symptoms",
        known: true,
        isolated: true,
      },
      {
        infectionDay: 0,
        healthCond: "no symptoms",
        known: true,
        isolated: true,
      },
      {
        infectionDay: 0,
        healthCond: "no symptoms",
        known: true,
        isolated: true,
      },
      {
        infectionDay: 0,
        healthCond: "no symptoms",
        known: true,
        isolated: true,
      },
      {
        infectionDay: 0,
        healthCond: "no symptoms",
        known: true,
        isolated: true,
      },
      {
        infectionDay: 0,
        healthCond: "no symptoms",
        known: true,
        isolated: true,
      },
      {
        infectionDay: 0,
        healthCond: "no symptoms",
        known: true,
        isolated: true,
      },
      {
        infectionDay: 0,
        healthCond: "no symptoms",
        known: false,
        isolated: false,
      },
      {
        infectionDay: 0,
        healthCond: "no symptoms",
        known: false,
        isolated: false,
      },
      {
        infectionDay: 0,
        healthCond: "no symptoms",
        known: false,
        isolated: false,
      },
    ];
  }

  function resetGame() {
    alert("Reset");
    setGameStart(false);
    setGameOver(false);
    setRound(1);
    setAction("initial_action");
    setBeds(200);
    setInfectionRate(0.3);
    setEconomicState(80);
    setNationalHappiness(80);
    setPatients(createPatients());
    setNotifications([
      {
        isNew: true,
        day: 1,
        hour: "7:00",
        content:
          "בוקר טוב ראש הממשלה, מבין 8.7 מיליון תושבים, ידועים לנו כרגע 7 חולי קורונה שחזרו מספינת הדיאמונד פרינסס. אנו ממתינים להוראותיך כיצד להתקדם. בכל סיבוב ניתן יהיה לבצע פעולה אחת, ויתקבלו הודעות מגורמים שונים במערכת הפוליטית ומחוץ לה. האם תצליח/י לנצח את המגיפה בלי שהמדינה תקרוס?",
      },
    ]);
  }

  const addPatients = (state, newPatients) => {
    state.patients = state.patients.concat(newPatients);
  };

  const addNotification = (notification) => {
    setNotifications(notifications.concat(notification));
  };

  const selectRandomText = (topic) => {
    return topic[Math.floor(Math.random() * topic.length)].content;
  };

  function updatePatients(state) {
    for (let i = 0; i < state.patients.length; i++) {
      function getPatientsBy(condition) {
        let count = 0;
        for (let i = 0; i < patients.length; i++) {
          if (patients[i].healthCond === condition) {
            count = count + 1;
          }
        }
        return count;
      }
      if (getPatientsBy("hospitalized") >= state.beds) {
        for (let i = 0; i < patients.length; i++) {
          if (state.patients[i].healthCond === "hospitalized") {
            state.patients[i].healthCond = "dead";
          }
        }
      }
      if (state.patients[i].healthCond !== "dead") {
        if (round - state.patients[i].infectionDay > 13) {
          state.patients[i].healthCond = "healed";
        }
        if (state.patients[i].healthCond === "no symptoms") {
          if (Math.random() <= 0.1) {
            state.patients[i].healthCond = "has symptoms";
            state.patients[i].known = true;
          }
        }
        if (state.patients[i].healthCond === "has symptoms") {
          if (Math.random() <= 0.05) {
            state.patients[i].healthCond = "hospitalized";
            state.patients[i].isolated = true;
          }
        }
        if (state.patients[i].healthCond === "hospitalized") {
          if (Math.random() <= 0.05) {
            state.patients[i].healthCond = "dead";
          }
          if (Math.random() <= 0.1) {
            state.patients[i].healthCond = "in recovery";
          }
        }
      }
    }
  }

  const addUnknownPatients = (state) => {
    let isolatedPatients = 0;
    let unIsolatedPatients = 0;
    let unknownWithNoSymptoms = 0;
    if (state.patients.length <= POPULATION / 4) {
      for (let i = 0; i < state.patients.length; i++) {
        if (state.patients[i].isolated) {
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
        addPatients(state, newPatients);
      }
    }
  };

  const createNotifications = () => {
    const tomorrow = round + 1;
    const [morning] = getRandomTime();

    const selectTextByState = (topic, value) => {
      for (let i = 0; i < topic.length; i++) {
        if (value > topic[i].level) {
          return topic[i].content;
        }
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

    addNotification([
      {
        isNew: true,
        day: tomorrow,
        hour: morning,
        content: selectMsg(),
      },
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
    }
    if (state.economicState >= 100) {
      state.economicState = 100;
    }
    if (state.nationalHappiness <= 0) {
      state.nationalHappiness = 0;
    }
    if (state.economicState <= 0) {
      state.economicState = 0;
    }
  }

  const isSick = function (patient) {
    if (patient.healthCond !== "healed" && patient.healthCond !== "dead") {
      return true;
    } else {
      return false;
    }
  };

  const allCured = function () {
    for (let i = 0; i < patients.length; i++) {
      if (patients[i].known === true && isSick(patients[i])) {
        return false;
      }
    }
    return true;
  };

  function isGameOver(state) {
    if (allCured() || state.economicState < 1 || state.nationalHappiness < 1) {
      setGameStart(false);
      setGameOver(true);
    }
  }

  function updateState(state) {
    isGameOver(state);
    addUnknownPatients(state);
    updatePatients(state);
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
        resetGame={resetGame}
        allCured={allCured}
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
          {// eslint-disable-next-line
          /* <Debug
            resetGame={resetGame}
            infectionRate={infectionRate}
            economicState={economicState}
            nationalHappiness={nationalHappiness}
            patients={patients}
            beds={beds}
          /> */}
          <Details round={round} />
          <DailyReport patients={patients} beds={beds} />
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
            beds={beds}
            setBeds={setBeds}
            patients={patients}
            setPatients={setPatients}
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
            beds={beds}
            setBeds={setBeds}
            patients={patients}
            setPatients={setPatients}
          />
        </Content>
        <Content>
          <NotificationPanel
            gameStart={gameStart}
            notifications={notifications}
            setNotificationStatus={setNotificationStatus}
          />
        </Content>
        <Footer>
          <Social>
            <Share />
            {/* <Like /> */}
          </Social>
        </Footer>
      </Game>
    </Container>
  );
}

export default CoronaApp;

const Content = styled.div`
  min-height: 100%;
  font-size: 92%;
  line-height: 1.3;
`;
const Footer = styled.footer`
  text-align: center;
  padding: 1.25em 0;
  position: absolute;
  bottom: 0;
  width: 100vw;
`;
const Social = styled(Content)`
  /* align-content: center; */
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
