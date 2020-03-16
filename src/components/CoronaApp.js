import React from "react";
import banner from "../images/cv06.png";
import styled from "styled-components";
import NotificationArea from "./NotificationArea";
import DecisionArea from "./DecisionArea";
import Footer from "./Footer";

function CoronaApp() {
  return (
    <Container>
      <Banner src={banner} alt="Corona virus" />
      <NotificationArea />
      <DecisionArea />
      <Footer />
    </Container>
  );
}
export default CoronaApp;

const Banner = styled.img`
  width: 100vw;
`;
const Container = styled.div`
  direction: rtl;
`;
