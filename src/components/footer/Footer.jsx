import styled from "styled-components";
import footerLeftImg from "../../assets/images/footer.png";
import footerRightImg from "../../assets/images/SKON.png";

const FooterBox = styled.footer`
  width: 100%;
  padding: 24px 40px;
  box-sizing: border-box;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Noto Sans KR', sans-serif;
`;

const FooterLeft = styled.div`
  display: flex;
  align-items: center;
`;

const FooterLeftImg = styled.img`
  height: 40px;
  object-fit: contain;
`;

const FooterRight = styled.div`
  display: flex;
  align-items: center;
`;

const FooterRightImg = styled.img`
  height: 40px;
  object-fit: contain;
`;

function Footer() {
  return (
    <FooterBox>
      <FooterLeft>
        <FooterLeftImg src={footerLeftImg} alt="footer left" />
      </FooterLeft>
      <FooterRight>
        <FooterRightImg src={footerRightImg} alt="footer right" />
      </FooterRight>
    </FooterBox>
  );
}

export default Footer;