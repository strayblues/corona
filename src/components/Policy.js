import React from "react";
import styled from "styled-components";

const Policy = () => {
  return (
    <Container>
      <PolicyChange>
        <div id="accordion">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-expand collapsed"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  מדיניות הבידוד
                  <span>
                    {" "}
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="form-check">
                  <input
                    type="radio"
                    name="policy_isolation"
                    className="form-check-input"
                    id="policy_isolation_0"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="policy_isolation_0"
                  >
                    בלי בידוד חובה
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="policy_isolation"
                    className="form-check-input"
                    id="policy_isolation_1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="policy_isolation_1"
                  >
                    לבודד ל-14 יום חולים סימפטומטיים
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="policy_isolation"
                    className="form-check-input"
                    id="policy_isolation_2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="policy_isolation_2"
                  >
                    לבודד ל-14 יום חולים סימפטומטיים ומי שהיה במגע עם חולה
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="policy_isolation"
                    className="form-check-input"
                    id="policy_isolation_3"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="policy_isolation_3"
                  >
                    לבודד ל-14 יום חולים סימפטומטיים, מי שהיה במגע עם חולה וכל
                    מי שחוזר מחו"ל
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-expand collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  מעקב אלקטרוני
                  <span>
                    {" "}
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="form-check">
                  <input
                    type="radio"
                    name="policy_surveillance"
                    className="form-check-input"
                    id="policy_surveillance_0"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="policy_surveillance_0"
                  >
                    על חולים
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="policy_surveillance"
                    className="form-check-input"
                    id="policy_surveillance_1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="policy_surveillance_1"
                  >
                    על חולים ומי שהיה איתם במגע
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="policy_surveillance"
                    className="form-check-input"
                    id="policy_surveillance_2"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="policy_surveillance_2"
                  >
                    על כולם
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h5 className="mb-0">
                <button
                  className="btn btn-expand collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  סגירת מוסדות (בחירה מרובה)
                  <span>
                    {" "}
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="policy_close_0"
                  />
                  <label className="form-check-label" htmlFor="policy_close_0">
                    בתי ספר יסודיים
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="policy_close_1"
                  />
                  <label className="form-check-label" htmlFor="policy_close_1">
                    תיכונים
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="policy_close_2"
                  />
                  <label className="form-check-label" htmlFor="policy_close_2">
                    גנים
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="policy_close_3"
                  />
                  <label className="form-check-label" htmlFor="policy_close_3">
                    תחבורה ציבורית
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="policy_close_4"
                  />
                  <label className="form-check-label" htmlFor="policy_close_4">
                    מסעדות
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="policy_close_5"
                  />
                  <label className="form-check-label" htmlFor="policy_close_5">
                    סופרמרקטים
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="policy_close_6"
                  />
                  <label className="form-check-label" htmlFor="policy_close_6">
                    תחנות דלק
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="policy_close_7"
                  />
                  <label className="form-check-label" htmlFor="policy_close_7">
                    בתי כנסת, מסגדים וכנסיות
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="policy_close_8"
                  />
                  <label className="form-check-label" htmlFor="policy_close_8">
                    בתי חולים
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="policy_close_9"
                  />
                  <label className="form-check-label" htmlFor="policy_close_9">
                    קופות חולים
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

export default Policy;

const PolicyChange = styled.div``;
const Container = styled.div`
  background: #eee;
`;
