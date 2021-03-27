import {FooterSpacer, StyledFooter, FooterContent, FooterRule, FooterNavContainer, FooterNavMenu, FooterNavMenuTag, FooterSteam, FooterSteamImage, FooterValve, FooterValveLink, FooterValveImage, FooterTextContainer, FooterText, FooterLinks, FooterClear, FooterValveLinksContainer, FooterValveLinks, FooterValveLinksSocial} from '../styledComponents/styled.footer.jsx';

const Footer = () => {

  return (
    <React.Fragment>
      <FooterSpacer/>
      <StyledFooter>
        <FooterContent>

          <FooterRule />
          <FooterNavContainer>
            <FooterNavMenu>
              <FooterNavMenuTag>ABOUT STEAM</FooterNavMenuTag>
            </FooterNavMenu>
            <FooterNavMenu>
              <FooterNavMenuTag>ABOUT VALVE</FooterNavMenuTag>
            </FooterNavMenu>
            <FooterNavMenu>
              <FooterNavMenuTag>HELP</FooterNavMenuTag>
            </FooterNavMenu>
            <FooterNavMenu>
              <FooterNavMenuTag>NEWS FEEDS</FooterNavMenuTag>
            </FooterNavMenu>
          </FooterNavContainer>
          <br/>
          <FooterRule />

          <FooterSteam>
            <FooterSteamImage src='https://store.akamai.steamstatic.com/public/images/v6/logo_steam_footer.png' alt='Valve Software'/>
          </FooterSteam>

          <FooterValve>
            <FooterValveLink>
              <FooterValveImage src='https://store.akamai.steamstatic.com/public/images/footerLogo_valve_new.png' alt='Valve Software'/>
            </FooterValveLink>
          </FooterValve>

          <FooterTextContainer>
            <FooterText>© 2021 Valve Corporation.  All rights reserved.  All trademarks are property of their respective owners in the US and other countries.</FooterText>
            <FooterText>VAT included in all prices where applicable. &nbsp;
              <FooterLinks>Privacy Policy</FooterLinks>
              &nbsp; | &nbsp;
              <FooterLinks>Legal</FooterLinks>
              &nbsp; | &nbsp;
              <FooterLinks>Steam Subscriber Agreement</FooterLinks>
              &nbsp; | &nbsp;
              <FooterLinks>Refunds</FooterLinks>
            </FooterText>
          </FooterTextContainer>

          <FooterClear />
          <br/>
          <FooterRule />

          <FooterValveLinksContainer>
            <FooterValveLinks>About Valve</FooterValveLinks>
            &nbsp; | &nbsp;
            <FooterValveLinks>Steamworks</FooterValveLinks>
            &nbsp; | &nbsp;
            <FooterValveLinks>Jobs</FooterValveLinks>
            &nbsp; | &nbsp;
            <FooterValveLinks>Steam Distribution</FooterValveLinks>
            &nbsp; | &nbsp;
            <FooterValveLinks>Gift Cards</FooterValveLinks>
            &nbsp; | &nbsp;
            <FooterValveLinks>
              <FooterValveLinksSocial src="https://store.akamai.steamstatic.com/public/images/ico/ico_facebook.gif"/>&nbsp; Steam
            </FooterValveLinks>
            &nbsp; | &nbsp;
            <FooterValveLinks>
              <FooterValveLinksSocial src="https://store.akamai.steamstatic.com/public/images/ico/ico_twitter.gif"/>&nbsp; @steam
            </FooterValveLinks>
          </FooterValveLinksContainer>

        </FooterContent>
      </StyledFooter>
    </React.Fragment>
  );
};

export default Footer;