import React, { useState } from "react";
import banner from "../images/benner02-sm.png";
import styled from "styled-components";
import NewGame from "./NewGame";
import Details from "./Details";
import NotificationArea from "./NotificationArea";
import NextRound from "./NextRound";
import ImmediateAction from "./ImmediateAction";
import Policy from "./Policy";
import Debug from "./Debug";
import { getRandomTime } from "./Time";
import economy from "../data/economy.json";
import happiness from "../data/happiness.json";
import random from "../data/random.json";

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

  // const [patientsNum, setPatientsNum] = useState(10);
  // const [patientsData, setpatientsData] = useState(10);
  // const [nationalHappiness, setNationalHappiness] = useState(10);
  // const [healthcareSystem, setHealthcareSystem] = useState(10);
  // const [gameOver, setGameOver] = useState(false);

  const addNotification = notification => {
    setNotifications(notifications.concat(notification));
  };

  const selectRandomText = topic => {
    return topic[Math.floor(Math.random() * topic.length)].content;
  };

  function handleClick() {
    if (document.getElementById("policy_isolation_0").checked) {
      setInfectionRate(0.3);
    } else if (document.getElementById("policy_isolation_1").checked) {
      setInfectionRate(0.3);
    } else if (document.getElementById("policy_isolation_2").checked) {
      setInfectionRate(0.2);
    } else if (document.getElementById("policy_isolation_3").checked) {
      setInfectionRate(0.15);
    }

    const tomorrow = round + 1;
    setRound(tomorrow);

    const [morning, afternoon, evening] = getRandomTime();

    addNotification([
      {
        isNew: true,
        day: tomorrow,
        hour: morning,
        content: selectRandomText(economy)
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
  }

  return (
    <Container>
      <Banner src={banner} alt="Corona virus" />
      <NewGame gameStart={gameStart} setGameStart={setGameStart} />
      <Content className={gameStart ? "show" : "hide"}>
        <Debug infectionRate={infectionRate} />
        <Details round={round} />
        <Game>
          <NotificationArea
            notifications={notifications}
            setNotificationStatus={setNotificationStatus}
          />
          <DecisionPanel
            round={round}
            setRound={setRound}
            addNotification={addNotification}
            infectionRate={infectionRate}
            setInfectionRate={setInfectionRate}
            handleClick={handleClick}
          >
            <nav>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a
                  className="nav-item nav-link active"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#nav-home"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  צעדים מיידיים
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-profile-tab"
                  data-toggle="tab"
                  href="#nav-profile"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  שינוי מדיניות
                </a>
                <a
                  className="nav-item nav-link"
                  id="nav-contact-tab"
                  data-toggle="tab"
                  href="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  אישור
                </a>
              </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <ImmediateAction />
              </div>
              <div
                className="tab-pane fade show"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <Policy />
              </div>
              <div
                className="tab-pane fade show"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              ></div>
            </div>
          </DecisionPanel>
          <NextRound
            handleClick={handleClick}
            round={round}
            setRound={setRound}
            addNotification={addNotification}
            infectionRate={infectionRate}
            setInfectionRate={setInfectionRate}
          />
        </Game>
      </Content>
    </Container>
  );
}
export default CoronaApp;

const DecisionPanel = styled.div`
  margin-top: 20px;
`;
const Content = styled.div`
  min-height: 100%;
  padding: 20px 4px;
  padding-bottom: 50px;
  font-size: 84%;
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
