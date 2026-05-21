//import styled from "styled-components";
// import styled from "styled-components";
import styled from "styled-components";

const FooterBox = styled.footer`
  width: 100%;
  padding: 20px 40px;
  box-sizing: border-box;
  background-color: #111111;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterTitle = styled.p`
  margin: 0;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
`;

const FooterSub = styled.p`
  margin: 4px 0 0;
  font-size: 10px;
  color: #9ca3af;
`;

function Footer() {
  return (
    <FooterBox>
      <div>
        <FooterTitle>⚡ SKU LIKELION. ALL RIGHTS RESERVED.</FooterTitle>
        <FooterSub>
          Seokyeong University, 124 Seokyeong-ro, Seongbuk-gu, Seoul, 02726, Republic of Korea
        </FooterSub>
      </div>
    </FooterBox>
  );
}

export default Footer;