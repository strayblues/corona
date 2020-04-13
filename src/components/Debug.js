import React from "react";
import styled from "styled-components";

const Debug = ({
  infectionRate,
  economicState,
  nationalHappiness,
  patients,
}) => {
  function getKnownPatients() {
    let count = 0;
    for (let i = 0; i < patients.length; i++) {
      if (patients[i].known) {
        count = count + 1;
      }
    }
    return count;
  }

  function getHospitalized() {
    let count = 0;
    for (let i = 0; i < patients.length; i++) {
      if (patients[i].healthCond === "hospitalized") {
        count = count + 1;
      }
    }
    return count;
  }

  function getDead() {
    let count = 0;
    for (let i = 0; i < patients.length; i++) {
      if (patients[i].healthCond === "dead") {
        count = count + 1;
      }
    }
    return count;
  }

  function getRecovering() {
    let count = 0;
    for (let i = 0; i < patients.length; i++) {
      if (patients[i].healthCond === "in recovery") {
        count = count + 1;
      }
    }
    return count;
  }

  function getHealed() {
    let count = 0;
    for (let i = 0; i < patients.length; i++) {
      if (patients[i].healthCond === "healed") {
        count = count + 1;
      }
    }
    return count;
  }

  return (
    <>
      <Container>
        <Header>Test</Header>
        <div>infection rate = {infectionRate.toFixed(3)}</div>
        <div>economy = {economicState.toFixed(3)}</div>
        <div>happiness = {nationalHappiness.toFixed(3)}</div>
        <div>
          <Pdebug>unknown patients: {patients.length}</Pdebug>
          <Pdebug>known patients: {getKnownPatients()}</Pdebug>
          <Pdebug>hospitalized patients: {getHospitalized()}</Pdebug>
          <Pdebug>recovering patients: {getRecovering()}</Pdebug>
          <Pdebug>healed patients: {getHealed()}</Pdebug>
          <Pdebug>dead patients: {getDead()}</Pdebug>
        </div>
      </Container>
      ;
    </>
  );
};

export default Debug;

const Container = styled.div`
  direction: ltr;
  text-align: left;
  background: white;
  color: red;
  position: fixed;
  border: 1px solid red;
  width: 20em;
  padding: 0 4px;
  height: 20em;
  top: 0;
  margin-bottom: 3em;
`;
const Header = styled.h3``;
const Pdebug = styled.p`
  margin: 0;
  padding: 0;
`;
