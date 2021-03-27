import {StyledHeader, HeaderContent, HeaderLogo, HeaderLogoHolder, HeaderA, HeaderImg, HeaderNavContainer, HeaderNavMenu, GlobalAction, GlobalActionMenu, InstallSteamButton, InstallSteamButtonContent, LoginAction, LanguageAction} from '../styledComponents/styled.header.jsx'
;
const Header = () => {

  return (
    <StyledHeader>
      <HeaderContent>

        <HeaderLogo>
          <HeaderLogoHolder>
            <HeaderA>
              <HeaderImg src='https://store.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016'/>
            </HeaderA>
          </HeaderLogoHolder>
        </HeaderLogo>

        <HeaderNavContainer>
          <HeaderNavMenu>STORE</HeaderNavMenu>
          <HeaderNavMenu>COMMUNITY</HeaderNavMenu>
          <HeaderNavMenu>ABOUT</HeaderNavMenu>
          <HeaderNavMenu>SUPPORT</HeaderNavMenu>
        </HeaderNavContainer>

        <GlobalAction>
          <GlobalActionMenu>
            <InstallSteamButton>
              <InstallSteamButtonContent>Install Steam</InstallSteamButtonContent>
            </InstallSteamButton>
            <LoginAction>login</LoginAction>
            &nbsp; | &nbsp;
            <LanguageAction>language</LanguageAction>
          </GlobalActionMenu>
        </GlobalAction>

      </HeaderContent>
    </StyledHeader>
  );
};

export default Header;