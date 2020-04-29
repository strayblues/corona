import React from "react";
import styled from "styled-components";

const DailyReport = ({ patients, beds }) => {
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
    return beds - getPatientsBy("hospitalized");
  }

  const report = [
    {
      text: "מקרי הדבקה מאומתים: ",
      number: getKnownPatients(),
    },
    {
      text: "חולים מאושפזים: ",
      number: getPatientsBy("hospitalized"),
    },
    {
      text: "חולים בהתאוששות: ",
      number: getPatientsBy("in recovery"),
    },
    {
      text: "חולים שהחלימו: ",
      number: getPatientsBy("healed"),
    },
    {
      text: "חולים שמתו: ",
      number: getPatientsBy("dead"),
    },
    {
      text: "מיטות פנויות: ",
      number: getBeds(),
    },
  ];

  return (
    <>
      <Container>
        <Marquee>
          {report
            .filter((items) => items.number > 0)
            .map((items) => {
              return (
                <>
                  <ReportItem className="marquee">
                    <Text>{items.text}</Text>
                    <Number>{items.number} </Number>
                  </ReportItem>
                </>
              );
            })}
        </Marquee>
      </Container>
    </>
  );
};

export default DailyReport;

const Text = styled.span`
  /* color: #bc261f; */
  color: white;
  display: inline-block;
  margin-left: 2px;
`;
const Number = styled.span`
  /* color: #bc261f; */
  color: white;
  display: inline-block;
`;
const Container = styled.div`
  /* padding: 6px 0; */
  width: 100%;
  margin: 0;
  background: #f09046;
  flex-direction: row;
  overflow: hidden;
  border-radius: 0;
`;

const Marquee = styled.div`
  white-space: nowrap;
  animation: marquee 18s linear infinite;
`;

const ReportItem = styled.div`
  margin: 3px;
  border-radius: 10px;
  padding: 0 7px 2px;
  display: inline-flex;
  font-size: 120%;
  font-weight: 700;
`;
