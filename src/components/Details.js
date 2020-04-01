import React from "react";
import styled from "styled-components";
import Block from "./common/Block";
import Info from "./common/Info";

const Details = ({ round }) => {
  return (
    <Container>
      <Content>
        <Pretty>
          <div className="hr-line"></div>
          <Crown alt="Crown">
            <i className="fas fa-crown fa-md" aria-hidden="true"></i>
          </Crown>
          <div className="hr-line"></div>
        </Pretty>
        <Day label1={"יום "} number={round} label2=" למשבר הקורונה" />
      </Content>
    </Container>
  );
};

const Day = styled(Info)``;
const Content = styled.span`
  display: inline;
  font-size: 130%;
  color: black;
  text-align: center;
  @media (max-width: 768px) {
  }
`;
const Pretty = styled.div`
  display: flex;
  color: #222;
  .hr-line {
    width: 100%;
    position: relative;
    margin: 15px;
    border-bottom: 1px solid #222;
  }
`;
const Crown = styled.div`
  /* width: 80px;
  height: 40px; */
  margin-bottom: 6px;
  position: relative;
  top: 3px;
`;
const Container = styled(Block)`
  @media (max-width: 768px) {
    /* max-height: 2em; */
    padding: 0;
    text-align: center;
  }
`;

export default Details;
