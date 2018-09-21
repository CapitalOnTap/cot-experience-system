import { Box, Flex } from 'grid-styled';
import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin-top: 100px;
  color: #a4aab3;
  a,
  a:visited {
    text-decoration: none;
    color: inherit;
    opacity: 0.8;
  }

  a:hover {
    opacity: 1;
  }
`;

const FooterLinksList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const IconCircle = styled.div`
  margin-right: 2em;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #a4aab3;
  border-radius: 50%;
`;

const SocialMediaLinks = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  a:last-child ${IconCircle} {
    margin-right: 0;
  }
`;

const SocialMediaICon = styled.i``;

const FooterLinksItem = styled.li`
  font-size: 16px;
  padding: 0.2em 1em;
  border-right: 1px solid #a4aab3;
  :last-child {
    border-right: none;
  }
`;

const FooterMessage = styled.p`
  font-size: 12px;
  font-weight: 300;
`;

const Footer = () => (
  <StyledFooter>
    <Flex justify="center" flexwrap="wrap" direction="column">
      <Box mb={3}>
        <FooterLinksList>
          <FooterLinksItem>
            <a href="https://www.capitalontap.com">© Capital on Tap</a>
          </FooterLinksItem>
          <FooterLinksItem>
            <a href="https://www.capitalontap.com/en/terms-of-use">Legal</a>
          </FooterLinksItem>
          <FooterLinksItem>
            <a href="https://www.capitalontap.com/en/privacy">Privacy Policy</a>
          </FooterLinksItem>
          <a href="https://www.capitalontap.com/en/cookies">
            <FooterLinksItem>Cookies</FooterLinksItem>
          </a>
        </FooterLinksList>
      </Box>
      <Box mb={3}>
        <SocialMediaLinks>
          <a
            href="https://www.linkedin.com/company/capital-on-tap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconCircle>
              <SocialMediaICon className="fab fa-linkedin-in" />
            </IconCircle>
          </a>
          <a href="https://www.facebook.com/CapitalOnTap" target="_blank" rel="noopener noreferrer">
            <IconCircle>
              <SocialMediaICon className="fab fa-facebook-f" />
            </IconCircle>
          </a>
          <a href="https://twitter.com/capitalontap" target="_blank" rel="noopener noreferrer">
            <IconCircle>
              <SocialMediaICon className="fab fa-twitter" />
            </IconCircle>
          </a>
          <a href="mailto:someemail@mail.com">
            <IconCircle>
              <SocialMediaICon className="far fa-envelope" />
            </IconCircle>
          </a>
        </SocialMediaLinks>
      </Box>
      <Flex justify="center">
        <FooterMessage>
          © New Wave Capital Limited, company number 07959823, trading name of Capital on Tap™.
          Registered in England and Wales, trading office 43 Worship Street, Ground Floor, London,
          EC2A 2DU. New Wave Capital Limited are regulated by the Financial Conduct Authority (FCA)
          license number 625592. Capital on Tap is a trademark of New Wave Capital Limited.
          Registered in England and Wales with the United Kingdom Intellectual Property Office. All
          rights reserved.
          <span>{` ${new Date().getFullYear()}`}</span>
        </FooterMessage>
      </Flex>
    </Flex>
  </StyledFooter>
);

Footer.propTypes = {};

export default Footer;
