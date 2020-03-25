import React from "react";
import styled from "styled-components";
import Block from "./common/Block";
import Info from "./common/Info";
import crown from "../images/crown.png";

const Details = ({ round }) => {
  return (
    <Container>
      <Content>
        <Pretty>
          <div className="hr-line"></div>
          <Crown src={crown} alt="Crown" />
          <div className="hr-line"></div>
        </Pretty>
        <Info label1={"יום "} number={round} label2=" למשבר הקורונה" />
      </Content>
    </Container>
  );
};

const Content = styled.span`
  display: inline;
  font-size: 180%;
  color: black;
  text-align: center;
  @media (max-width: 768px) {
  }
`;
const Pretty = styled.div`
  display: flex;

  .hr-line {
    width: 100%;
    position: relative;
    margin: 15px;
    border-bottom: 1px solid #000;
  }
`;
const Crown = styled.img`
  width: 80px;
  height: 40px;
  margin-bottom: 6px;
  position: relative;
  top: 3px;
  color: #ff0000;

  @media (max-width: 768px) {
  }
`;
const Container = styled(Block)`
  @media (max-width: 768px) {
    /* max-height: 2em; */
    padding: 0;
    text-align: center;
  }
`;

export default Details;
