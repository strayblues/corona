import React from "react";
import styled from "styled-components";

const Decision = ({
  round,
  nextRound,
  decision,
  option1,
  option2,
  option3,
  option4
}) => {
  function handleClick(item) {
    if (item === 1) {
      // more ppl get infected
    } else if (item === 2) {
      // something happens
    } else if (item === 3) {
      // something happens
    } else if (item === 4) {
      // something happens
    }
    // in any case, increase roundCount by 1
    nextRound();

    // add className="inactive" to parent

    return round;
    // and start a new round
  }

  return (
    <Container>
      <ImmediateAction>
        <PolicyLine>
          <h5>צעדים מיידיים</h5>
          {/* <Option onClick={e => handleClick(1)}>{option1}</Option>
          <Option onClick={e => handleClick(2)}>{option2}</Option> */}
        </PolicyLine>
        <PolicyLine>
          {/* <Option onClick={e => handleClick(3)}>{option3}</Option>
          <Option onClick={e => handleClick(4)}>{option4}</Option> */}
        </PolicyLine>
        <PolicyLine>
          <Skip onClick={e => handleClick(5)}>
            <span role="img" aria-label="shrug">
              🤷🏼‍♂️
            </span>{" "}
            לדלג למחר
          </Skip>
        </PolicyLine>
      </ImmediateAction>
      <PolicyChange>
        <h5>שינוי מדיניות</h5>
        <div id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-expand collapsed"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  מדיניות הבידוד
                </button>
              </h5>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    בלי בידוד חובה
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    לבודד ל-14 יום חולים סימפטומטיים
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    לבודד ל-14 יום חולים סימפטומטיים ומי שהיה במגע עם חולה
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    לבודד ל-14 יום חולים סימפטומטיים, מי שהיה במגע עם חולה וכל
                    מי שחוזר מחו"ל
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-expand collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  סגירת מוסדות (בחירה מרובה)
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    בתי ספר יסודיים
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    תיכונים
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    גנים
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    תחבורה ציבורית
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    מסעדות
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    סופרמרקטים
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    תחנות דלק
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    בתי כנסת, מסגדים וכנסיות
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    בתי חולים
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    קופות חולים
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn btn-expand collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  מעקב אלקטרוני
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    על חולים
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    על חולים ומי שהיה איתם במגע
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    על כולם
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PolicyChange>
    </Container>
  );
};

export default Decision;

const ImmediateAction = styled.div``;
const PolicyChange = styled.div`
  margin: 1em 0;
`;
const PolicyLine = styled.div``;
const Option = styled.button`
  padding: 8px;
  margin: 2px;
  background: #f7f7f7;
  box-shadow: 0 1px 1px 0 #888;
`;
const Skip = styled(Option)``;
const Container = styled.div`
  background: #eee;
`;
