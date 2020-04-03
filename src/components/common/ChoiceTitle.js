import React from "react";
import styled from "styled-components";

const ChoiceTitle = ({ title }) => {
  return (
    <Container>
      <div className="card-header" id="headingTwo">
        <h5 className="mb-0">
          <button
            className="btn btn-expand collapsed"
            data-toggle="collapse"
            data-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            {title}
            <span>
              {" "}
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </h5>
      </div>
    </Container>
  );
};

export default ChoiceTitle;

const Container = styled.div`
  font-family: "Alef", sans-serif;
`;
