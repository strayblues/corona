import React, { useState } from "react";
import banner from "../images/cv07-sm.png";
import styled from "styled-components";
import Details from "./Details";
import NotificationArea from "./NotificationArea";
import DecisionArea from "./DecisionArea";
import { setFadeoutTime } from "./Time";

function CoronaApp() {
  const [round, setRound] = useState(1);
  const [decisionVisibility, setDecisionVisibility] = useState(false);
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
  const [currentDecision, setDecision] = useState(0);
  const [userAction, setuserAction] = useState(null);
  const [patientsNum, setPatientsNum] = useState(10);
  const [patientsData, setpatientsData] = useState(10);
  const [economy, setEconomy] = useState(10);
  const [nationalHappiness, setNationalHappiness] = useState(10);
  const [healthcareSystem, setHealthcareSystem] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  const addNotification = notification => {
    setNotifications(notifications.concat(notification));
  };

  return (
    <Container>
      <Banner src={banner} alt="Corona virus" />
      <Content>
        <Details round={round} />
        <Game>
          <NotificationArea
            notifications={notifications}
            setNotificationStatus={setNotificationStatus}
          />
          <DecisionArea
            round={round}
            setRound={setRound}
            decisionVisibility={decisionVisibility}
            setDecisionVisibility={setDecisionVisibility}
            addNotification={addNotification}
          />
        </Game>
      </Content>
    </Container>
  );
}
export default CoronaApp;

const Content = styled.div`
  min-height: 100%;
  padding: 20px;
  padding-bottom: 50px;
  @media (max-width: 768px) {
  }
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
