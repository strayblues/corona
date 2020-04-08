import React from "react";
import styled from "styled-components";
const NewGame = ({ gameStart, setGameStart }) => {
  const handleGameStart = (e) => {
    gameStart = setGameStart(true);
  };
  return (
    <Container className={gameStart ? "hide" : "show"}>
      <div className="modal-content intro">
        <div className="modal-header">
          <Intro>
            <p className="modal-title">בוקר טוב ראש הממשלה,</p>
            <p>
              מבין 8.7 מיליון תושבים, ידועים לנו כרגע 7 חולי קורונה שחזרו מספינת
              הדיאמונד פרינסס. אנו ממתינים להוראותיך כיצד להתקדם. בכל סיבוב ניתן
              יהיה לבצע פעולה אחת, ויתקבלו הודעות מגורמים שונים במערכת הפוליטית
              ומחוץ לה. האם תצליח/י לנצח את המגיפה בלי שהמדינה תקרוס?
            </p>
          </Intro>
        </div>
        <div className="modal-footer">
          <ActionType>
            <button
              type="button"
              className="btn btn-purple"
              onClick={handleGameStart}
            >
              בוא/י נגלה!
            </button>
          </ActionType>
        </div>
      </div>
    </Container>
  );
};

export default NewGame;
const Container = styled.div`
  align-self: center;
  text-align: right;
  width: 90%;
  margin: 5%;
`;
const ActionType = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Intro = styled.div`
  display: flex;
  flex-direction: column;
`;
