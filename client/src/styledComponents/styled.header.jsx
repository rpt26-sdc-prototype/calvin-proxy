export const StyledHeader = styled.header`
  background: #171a21;
  min-width: 940px;
  font-family: "Motiva Sans", Sans-serif;
  font-weight: normal;
  font-size: 14px;
  display: block;
  padding-left: 16px;
  padding-right: 16px;
`;

export const HeaderContent = styled.div`
  background: #171a21;
  position: relative;
  width: 940px;
  height: 104px;
  margin: 0px auto;
  z-index: 402;
`;

export const HeaderLogo = styled.div`
  float: left;
  padding-top: 30px;
  margin-right: 40px;
  width: 176px;
  height: 44px;
`;

export const HeaderLogoHolder = styled.span`

`;

export const HeaderA = styled.a`
  text-decoration: none;
  color: #ffffff;
`;

export const HeaderImg = styled.img`
    width: 176px;
    aspect-ratio: auto 176 / 44;
    height: 44px;
`;

export const HeaderNavContainer = styled.div`
  position: absolute;
  left: 200px;
`;

export const HeaderNavMenu = styled.a`
  display: block;
  position: relative;
  padding-top: 45px;
  padding-left: 7px;
  padding-right: 7px;
  padding-bottom: 7px;
  line-height: 16px;
  float: left;
  font-size: 14px;
  color: #b8b6b4;
  text-transform: uppercase;
`;

export const GlobalAction = styled.div`
  position: absolute;
  right: 0px;
  top: 6px;
  height: 21px;
  line-height: 21px;
  color: #b8b6b4;
  font-size: 11px;
  z-index: 401;
`;

export const GlobalActionMenu = styled.div`
  line-height: 24px;
  vertical-align: top;
  display: inline-block;
`;

export const InstallSteamButton = styled.div`
  vertical-align: top;
  display: inline-block;
  position: relative;
  height: 21px;
  line-height: 24px;
  margin-right: 3px;
`;

export const InstallSteamButtonContent = styled.a`
  background-color: #5c7e10;
  display: inline-block;
    padding-left: 35px;
    padding-right: 9px;
    background-position: 10px 5px;
    background-image: url(https://store.akamai.steamstatic.com/public/shared/images/header/btn_header_installsteam_download.png?v=1);
    background-repeat: no-repeat;
    text-decoration: none;
    color: #e5e4dc;
    font-weight: normal;
`;

export const LoginAction = styled.a`
  color: #b8b6b4;
  padding: 0 4px;
  vertical-align: top;
  text-decoration: none;
  cursor: pointer;
`;

export const LanguageAction = styled.a`
display: inline-block;
    padding-left: 4px;
    line-height: 25px;
    vertical-align: top;
    margin-right: 5px;

    padding-right: 18px;
    background-image: url(https://store.akamai.steamstatic.com/public/shared/images/popups/btn_arrow_down_padded.png);
    background-position: right center;
    background-repeat: no-repeat;
    cursor: pointer;
`;