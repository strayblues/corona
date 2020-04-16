import React from "react";
import styled from "styled-components";

const Debug = ({
  infectionRate,
  economicState,
  nationalHappiness,
  patients,
  beds,
}) => {
  function getPatientsBy(condition) {
    let count = 0;
    for (let i = 0; i < patients.length; i++) {
      if (patients[i].healthCond === condition) {
        count = count + 1;
      }
    }
    return count;
  }
  function getKnownPatients() {
    let count = 0;
    for (let i = 0; i < patients.length; i++) {
      if (patients[i].known) {
        count = count + 1;
      }
    }
    return count;
  }
  function getBeds() {
    return beds;
  }

  const report = [
    {
      status: "חולים ידועים: ",
      number: getKnownPatients(),
    },
    {
      status: "חולים מאושפזים: ",
      number: getPatientsBy("healed"),
    },
    {
      status: "חולים בהתאוששות: ",
      number: getPatientsBy("healed"),
    },
    {
      status: "חולים שהחלימו: ",
      number: getPatientsBy("healed"),
    },
    {
      status: "חולים שמתו: ",
      number: getPatientsBy("healed"),
    },
  ];

  // Report component
  // for (let i = 0; i < report.length; i++) {
  //   if (report[i].data) {
  //     <ReportItem>
  //       {report[i].status} {report[i].number} + ", "
  //     </ReportItem>;
  //   }
  // }

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
          <Pdebug>
            hospitalized patients: {getPatientsBy("hospitalized")}
          </Pdebug>
          <Pdebug>recovering patients: {getPatientsBy("recovering")}</Pdebug>
          <Pdebug>healed patients: {getPatientsBy("healed")}</Pdebug>
          <Pdebug>dead patients: {getPatientsBy("dead")}</Pdebug>
          <Pdebug>beds: {getBeds()}</Pdebug>
          <Pdebug>
            {report[4].status} {report[4].number}
          </Pdebug>
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
// const ReportItem = styled.span``;
