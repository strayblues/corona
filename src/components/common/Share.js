import React from "react";
import styled from "styled-components";
import {
  FacebookShareCount,
  FacebookShareButton,
  TwitterShareButton
} from "react-share";

const Share = () => {
  return (
    <Container>
      <Facebook className="social-container facebook-container">
        <FacebookShareButton
          className="btn-share btn-facebook"
          url={"https://corona.codepink.dev"}
        >
          שתפו בפייסבוק
        </FacebookShareButton>
        <FacebookShareCount
          className="btn-count btn-facebook"
          url={"https://corona.codepink.dev"}
        ></FacebookShareCount>
      </Facebook>
      <Twitter className="social-container twitter-container">
        <TwitterShareButton
          className="btn-share btn-twitter"
          url={"https://corona.codepink.dev"}
        >
          שתפו בטוויטר
        </TwitterShareButton>
      </Twitter>
    </Container>
  );
};

export default Share;

const Container = styled.div`
  width: 25%;
  margin: auto;
  display: flex;

  /* background: white; */
  /* flex-direction: column; */
`;
const Facebook = styled.div``;
const Twitter = styled.div``;
