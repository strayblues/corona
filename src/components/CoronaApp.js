import React from "react";
import banner from "../images/cv04.png";
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
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  width: 100vw;
`;
const Container = styled.div`
  direction: rtl;
`;
