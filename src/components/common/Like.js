import React from "react";
import styled from "styled-components";
import ReactFBLike from "react-fb-like";

const Like = () => {
  return (
    <Container>
      <ReactFBLike
        className="like-count"
        language="he_IL"
        layout="standard"
        share="false"
        href="https://www.facebook.com/%D7%94%D7%97%D7%99%D7%99%D7%9D-%D7%A2%D7%A6%D7%9E%D7%9D-104461374549252"
      />
    </Container>
  );
};

export default Like;

const Container = styled.div`
  text-align: center;
  margin-top: 12px;
  @media screen and (min-device-width: 375px) and (max-device-width: 812px) {
    margin-top: 18px;
    width: 30%;
    margin: auto;
  }
`;
