import React from "react";
import styled from "styled-components";

const GameOver = ({ gameStart, setGameStart, gameOver, setGameOver }) => {
  const handleGameStart = (e) => {
    gameOver = setGameOver(false);
    gameStart = setGameStart(true);
  };

  let reason = {
    victory: false,
    topic: "economy",
    msg: "",
  };

  if (reason.victory) {
    // reasons you win
    if (reason.topic === "economy") {
      reason.msg = "ניצחת! הצלת את הכלכלה!";
    } else if (reason.topic === "healthcare") {
      reason.msg = "ניצחת! הצלחת את מערכת הבריאות!";
    }
  } else {
    // reasons you lose
    if (reason.topic === "economy") {
      reason.msg = "הפסדת! הכלכלה מתה!";
    } else if (reason.topic === "healthcare") {
      reason.msg = "הפסדת! מערכת הבריאות קרסה!";
    } else if (reason.topic === "national_happiness") {
      reason.msg = "הפסדת! העם התאכזב מטיפולך במצב והדיח אותך!";
    }
  }

  return (
    <Container className={gameStart ? "hide" : "show"}>
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
