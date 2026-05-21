// import styled from "styled-components";
// import logoUrl from "../../assets/icons/skuniv_icon.png";

// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import logoUrl from "../../assets/icons/skuniv_icon.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logoUrl from "../../assets/icons/skuniv_icon.png";

const HeaderBox = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: stretch;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
`;

const LogoArea = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px;
  text-decoration: none;
  border-right: 1px solid #e5e7eb;
  flex-shrink: 0;
`;

const LogoImage = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`;

const LogoTitle = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #111111;
  white-space: nowrap;
`;

const Nav = styled.nav`
  display: flex;
  align-items: stretch;
  margin-left: auto;
`;

const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  color: #374151;
  border-left: 1px solid #e5e7eb;
  white-space: nowrap;

  &:hover {
    background-color: #f9fafb;
  }
`;

function Header() {
  return (
    <HeaderBox>
      <LogoArea to="/">
        <LogoImage src={logoUrl} alt="서경대학교 로고" />
        <LogoTitle>멋쟁이사자처럼 서경대학교</LogoTitle>
      </LogoArea>
      <Nav>
        <NavItem to="#">지원하기</NavItem>
        <NavItem to="#">프로젝트</NavItem>
        <NavItem to="/">구성원</NavItem>
        <NavItem to="#">로그인/회원가입</NavItem>
      </Nav>
    </HeaderBox>
  );
}

export default Header;