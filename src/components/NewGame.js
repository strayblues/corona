import React from "react";
// import ReactDOM from "react-dom";
// import Modal from "react-modal";
import styled from "styled-components";

const NewGame = ({ gameStart, setGameStart }) => {
  const handleGameStart = e => {
    gameStart = setGameStart(true);
  };
  return (
    <Container className={gameStart ? "hide" : "show"}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">בוקר טוב, ראש הממשלה.</h5>
        </div>
        <div className="modal-body">
          <p>
            מבין 8.7 מיליון תושבים, ידועים לנו כרגע 7 חולי קורונה שחזרו מספינת
            הדיאמונד פרינסס. אנחנו ממתינים להוראותיך כיצד להתקדם.
          </p>
          <p>
            בכל סיבוב תוכל לבצע פעולה אחת, ותקבל הודעות מגורמים שונים במערכת
            הפוליטית ומחוץ לה.
          </p>
          <p>האם תצליח לנצח את המגיפה בלי שהמדינה תקרוס?</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-purple"
            onClick={handleGameStart}
          >
            בוא נגלה!
          </button>
        </div>
      </div>
    </Container>
  );
};

export default NewGame;

const Container = styled.div``;
