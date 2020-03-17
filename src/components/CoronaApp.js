import React from "react";
import banner from "../images/cv06.png";
import styled from "styled-components";
import Details from "./Details";
import NotificationArea from "./NotificationArea";
import DecisionArea from "./DecisionArea";
import Footer from "./Footer";

function CoronaApp() {
  return (
    <Container>
      <Banner src={banner} alt="Corona virus" />
      <Content>
        <Details />
        <NotificationArea />
        <DecisionArea />
      </Content>
      <Footer />
    </Container>
  );
}
export default CoronaApp;

const Content = styled.div`
  display: flex;
  min-height: 100%;
  padding: 20px;
  padding-bottom: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Banner = styled.img`
  width: 100vw;
`;
const Container = styled.div`
  direction: rtl;
`;
