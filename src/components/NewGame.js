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
      <h2>בוקר טוב, ראש הממשלה.</h2>
      <div>
        מבין 8.7 מיליון תושבים, ידועים לנו כרגע 7 חולי קורונה שחזרו מספינת
        הדיאמונד פרינסס. אנחנו ממתינים להוראותיך כיצד להתקדם. בכל סיבוב תוכל
        לבצע פעולה אחת, ותקבל הודעות מגורמים שונים במערכת הפוליטית ומחוץ לה. האם
        תצליח לנצח את המגיפה בלי שהמדינה תקרוס?
      </div>
      <button onClick={handleGameStart}>בוא נגלה!</button>
    </Container>
  );
};

export default NewGame;

const Container = styled.div`
  font-size: 90%;
  height: 100%;
  width: 100%;
  text-align: center;

  @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) {
    height: 37px;
  }
`;
const Content = styled.div``;
