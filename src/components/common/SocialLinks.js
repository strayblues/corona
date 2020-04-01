import React from "react";
import styled from "styled-components";
import {
  FacebookShareCount,
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton
} from "react-share";

const SocialLinks = () => {
  return (
    <Container>
      <Facebook>
        <p>
          מספר השיתופים בפייסבוק:
          <FacebookShareCount
            className="meazben"
            url={"https://corona.codepink.dev"}
          ></FacebookShareCount>
        </p>

        <FacebookShareButton
          className="fb-btn-share"
          url={"https://corona.codepink.dev"}
        >
          שיתוף בפייסבוק
        </FacebookShareButton>
      </Facebook>
      <Twitter>
        <TwitterIcon className="meazben" size={20} />
        <TwitterShareButton
          className="meazben"
          url={"https://corona.codepink.dev"}
        >
          שיתוף בטוויטר
        </TwitterShareButton>
      </Twitter>
    </Container>
  );
};

export default SocialLinks;

const Container = styled.div`
  width: 25%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;
const Facebook = styled.div``;
const Twitter = styled.div``;
