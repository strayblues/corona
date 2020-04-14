import React from "react";
import styled from "styled-components";
import {
  FacebookShareCount,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

const Share = () => {
  return (
    <Container>
      <FacebookShareButton
        className="social-btn"
        url={"https://corona.codepink.dev"}
      >
        <FacebookIcon round size="30" />
      </FacebookShareButton>
      <TwitterShareButton
        className="social-btn"
        url={"https://corona.codepink.dev"}
      >
        <TwitterIcon round size="30" />
      </TwitterShareButton>
      <WhatsappShareButton
        className="social-btn"
        url={"https://corona.codepink.dev"}
      >
        <WhatsappIcon round size="30" />
      </WhatsappShareButton>
      <p>לשתף זה כיף - Sharing is caring</p>
      {/* <Facebook className="social-container facebook-container">
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
      <br />
      <Twitter className="social-container twitter-container">
        <TwitterShareButton
          className="btn-share btn-twitter"
          url={"https://corona.codepink.dev"}
        >
          שתפו בטוויטר
        </TwitterShareButton>
      </Twitter> */}
    </Container>
  );
};

export default Share;

const Container = styled.div`
  margin-top: 10px;
  @media (max-width: 468px) {
  }
`;
