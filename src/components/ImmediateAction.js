import React from "react";
import styled from "styled-components";

const ImmediateAction = ({ round, nextRound }) => {
  return (
    <Container>
      <PolicyChange>
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
                  שאלה חד פעמית
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
                    תשובה א
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    תשובה ב
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    תשובה ג
                  </label>
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
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
