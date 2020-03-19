import React, { useState } from "react";
import banner from "../images/cv07-sm.png";
import styled from "styled-components";
import Details from "./Details";
import NotificationArea from "./NotificationArea";
import DecisionArea from "./DecisionArea";

function CoronaApp() {
  const [round, setRound] = useState(1);
  const [decisionVisibility, setDecisionVisibility] = useState(false);
  const [currentDecision, setDecision] = useState(0);
  const [userAction, setuserAction] = useState(null);
  const [patientsNum, setPatientsNum] = useState(10);
  const [patientsData, setpatientsData] = useState(10);
  const [economy, setEconomy] = useState(10);
  const [nationalHappiness, setNationalHappiness] = useState(10);
  const [healthcareSystem, setHealthcareSystem] = useState(10);
  const [gameOver, setGameOver] = useState(false);

  return (
    <Container>
      <Banner src={banner} alt="Corona virus" />
      <Content>
        <Details round={round} />
        <Game>
          <NotificationArea round={round} />
          <DecisionArea
            round={round}
            setRound={setRound}
            decisionVisibility={decisionVisibility}
            setDecisionVisibility={setDecisionVisibility}
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
    #46a5a3,
    #46a5a3,
    #46a5a3
  );
`;
const Container = styled.div`
  direction: rtl;
`;
