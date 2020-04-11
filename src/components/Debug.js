import React from "react";
import styled from "styled-components";

const Debug = ({
  infectionRate,
  economicState,
  nationalHappiness,
  patients,
}) => {
  // const showPatientsData(patients){
  //   for (let i = 0; i < patients.length; i++) {
  //     patients[i].isNew = false;
  // };
  return (
    <>
      <Container>
        <Header>Testing...</Header>
        <div>r = {infectionRate.toFixed(3)}</div>
        <div>e = {economicState.toFixed(3)}</div>
        <div>h = {nationalHappiness.toFixed(3)}</div>

        <div>
          first patient and patient number =
          <div>
            <Pdebug>{patients.length}</Pdebug>
            <Pdebug>{patients[0].infectionDay}</Pdebug>
            <Pdebug>{patients[0].healthCond}</Pdebug>
            <Pdebug>{patients[0].known ? "known" : "unknown"}</Pdebug>
            <Pdebug>
              {patients[0].isolated ? "isolated" : "not isolated"}
            </Pdebug>
          </div>
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
