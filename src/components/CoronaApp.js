import React from "react";
import banner from "../images/cv06.png";
import styled from "styled-components";
import NotificationBox from "./NotificationBox";
import DecisionBox from "./DecisionBox";
import Footer from "./Footer";

function CoronaApp() {
  return (
    <Container>
      <Banner src={banner} alt="Corona virus" />
      <NotificationBox />
      <DecisionBox />
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
