import React from "react";
import styled from "styled-components";
import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";

const Share = () => {
  return (
    <Container>
      <FacebookShareButton
        className="social-btn"
        url={"https://covid.codepink.dev"}
      >
        <FacebookIcon round size="30" />
      </FacebookShareButton>
      <TwitterShareButton
        className="social-btn"
        url={"https://covid.codepink.dev"}
      >
        <TwitterIcon round size="30" />
      </TwitterShareButton>
      <WhatsappShareButton
        className="social-btn"
        url={"https://covid.codepink.dev"}
      >
        <WhatsappIcon round size="30" />
      </WhatsappShareButton>
      <p>לשתף זה כיף</p>
    </Container>
  );
};

export default Share;

const Container = styled.div`
  margin-top: 10px;
  @media (max-width: 468px) {
  }
`;
