import React from "react";
import styled from "styled-components";
const NewGame = ({ gameStart, setGameStart }) => {
  const handleGameStart = e => {
    gameStart = setGameStart(true);
  };
  return (
    <Container className={gameStart ? "hide" : "show"}>
      <div className="modal-content intro">
        <div className="modal-header">
          <Intro>
            <p className="modal-title">בוקר טוב ראש הממשלה,</p>
            <p>
              {" "}
              מבין 8.7 מיליון תושבים, ידועים לנו כרגע 7 חולי קורונה שחזרו מספינת
              הדיאמונד פרינסס. אנחנו ממתינים להוראותיך כיצד להתקדם. בכל סיבוב
              תוכל לבצע פעולה אחת, ותקבל הודעות מגורמים שונים במערכת הפוליטית
              ומחוץ לה. האם תצליח לנצח את המגיפה בלי שהמדינה תקרוס?{" "}
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
              בוא נגלה!
            </button>
          </ActionType>
        </div>
      </div>
    </Container>
  );
};

export default NewGame;
const Container = styled.div``;
const ActionType = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Intro = styled.div`
  display: flex;
  flex-direction: column;
`;
