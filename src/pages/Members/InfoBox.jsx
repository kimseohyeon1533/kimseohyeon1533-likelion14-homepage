import styled from "styled-components";
import smileImg from "../../assets/images/Group1.png";
import sparkleImg from "../../assets/images/Group2.png";

const Card = styled.div`
  width: 120px;
  border: 1px solid #ccccbc;
  border-radius: 2px;
  overflow: hidden;
  background-color: #ffffff;
  flex-shrink: 0;
`;

const PhotoArea = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #f0f0e4;
  position: relative;
  overflow: hidden;
`;

/* Group2: 바탕 - z-index 0 */
const BgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

/* Group1: 스마일 - z-index 1 (위에) */
const SmileImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 65%;
  height: 65%;
  object-fit: contain;
  z-index: 1;
`;

/* 프로필 사진 - z-index 1 */
const ProfileImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const InfoArea = styled.div`
  padding: 8px 10px 10px;
  background-color: #f0f4e0;
  border-top: 1px solid #ccccbc;
`;

const Name = styled.p`
  margin: 0 0 2px;
  font-size: 12px;
  font-weight: 700;
  color: #111111;
  font-family: 'Noto Sans KR', sans-serif;
`;

const Detail = styled.p`
  margin: 0;
  font-size: 10px;
  font-weight: 400;
  color: #888880;
  font-family: 'Noto Sans KR', sans-serif;
`;

function InfoBox({ name, info, img }) {
  return (
    <Card>
      <PhotoArea>
        <BgImg src={sparkleImg} alt="" />
        {img
          ? <ProfileImg src={img} alt={name} />
          : <SmileImg src={smileImg} alt="smile" />
        }
      </PhotoArea>
      <InfoArea>
        <Name>{name}</Name>
        <Detail>{info}</Detail>
      </InfoArea>
    </Card>
  );
}

export default InfoBox;