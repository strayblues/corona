import React from "react";
import styled from "styled-components";

const ImmediateAction = ({ round, nextRound }) => {
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
                  שאלה חד פעמית
                  <span>
                    {" "}
                    <i className="fa fa-angle-down" aria-hidden="true"></i>
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
                    name="immediate_action"
                    className="form-check-input"
                    id="action0"
                  />
                  <label className="form-check-label" htmlFor="action0">
                    תשובה א
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="immediate_action"
                    className="form-check-input"
                    id="action1"
                  />
                  <label className="form-check-label" htmlFor="action1">
                    תשובה ב
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="immediate_action"
                    className="form-check-input"
                    id="action2"
                  />
                  <label className="form-check-label" htmlFor="action2">
                    תשובה ג
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    name="immediate_action"
                    className="form-check-input"
                    id="action3"
                  />
                  <label className="form-check-label" htmlFor="action3">
                    תשובה ד
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

export default ImmediateAction;

const PolicyChange = styled.div``;
const Container = styled.div`
  background: #eee;
`;
