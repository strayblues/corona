import React from "react";
import styled from "styled-components";

const GameOver = ({
  allCured,
  gameOver,
  setGameOver,
  patients,
  economicState,
  nationalHappiness,
}) => {
  const handleGameStart = (e) => {
    gameOver = setGameOver(false);
  };

  let reason = {
    victory: false,
    msg: "",
  };

  // const isSick = function (patient) {
  //   if (patient.healthCond !== "healed" && patient.healthCond !== "dead") {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  // const allCured = function () {
  //   for (let i = 0; i < patients.length; i++) {
  //     if (isSick(patients[i])) {
  //       return false;
  //     }
  //   }
  //   return true;
  // };

  if (allCured()) {
    reason.victory = true;
    reason.msg = "ניצחת: הצלת את מערכת הבריאות!!!";
  } else if (economicState < 1) {
    reason.msg = "הפסדת: המדינה הגיעה לקריסה כלכלית.";
  } else if (nationalHappiness < 1) {
    reason.msg = "הפסדת: העם התאכזב מטיפולך במצב והדיח אותך.";
  }

  return (
    <Container className={gameOver ? "show" : "hide"}>
      <div className="modal-content intro">
        <div className="modal-header new-game">
          <Score className={reason.victory ? "win" : "lose"}>
            <h5
              className={
                reason.victory ? "modal-title win" : "modal-title lose"
              }
            >
              נגמר המשחק
            </h5>
            <p>{reason.msg}</p>
          </Score>
        </div>
        <div className="modal-footer">
          <NewGame className="btn btn-purple" onClick={handleGameStart}>
            משחק חדש
          </NewGame>
        </div>
      </div>
    </Container>
  );
};

export default GameOver;

const Container = styled.div`
  align-self: center;
  text-align: right;
  width: 90%;
  margin: 5%;
`;
const NewGame = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Score = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
