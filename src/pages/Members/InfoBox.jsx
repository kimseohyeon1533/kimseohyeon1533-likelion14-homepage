import styled from "styled-components";

import smileImg from "../../assets/images/Group1.png";
import sparkleImg from "../../assets/images/Group2.png";

/* =========================================================
   카드 전체
========================================================= */
const Card = styled.div`
  width: 120px;

  border: 1px solid #000000;
  border-radius: 2px;

  overflow: hidden;

  background-color: #ffffff;

  flex-shrink: 0;
`;

/* =========================================================
   이미지 영역
========================================================= */
const PhotoArea = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;

  background-color: #ffffff;

  position: relative;
  overflow: hidden;
`;

/* =========================================================
   배경 패턴 이미지
========================================================= */
const BgImg = styled.img`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  /* 도트 느낌 유지 */
  image-rendering: pixelated;

  z-index: 0;
`;

/* =========================================================
   기본 스마일 이미지
========================================================= */
const SmileImg = styled.img`
  position: absolute;

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  /* 배경 테두리 여백 확보 */
  width: 48%;
  height: 48%;

  object-fit: contain;

  /* 픽셀 감성 유지 */
  image-rendering: pixelated;

  z-index: 1;
`;

/* =========================================================
   프로필 사진
========================================================= */
const ProfileImg = styled.img`
  position: absolute;

  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;

  z-index: 1;
`;

/* =========================================================
   하단 정보 영역
========================================================= */
const InfoArea = styled.div`
  padding: 8px 10px 10px;

  background-color: #F8FBE7;

  border-top: 1px solid #000000;
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

  color: #000000;

  font-family: 'Noto Sans KR', sans-serif;
`;

/* =========================================================
   InfoBox 컴포넌트
========================================================= */
function InfoBox({ name, info, img }) {

  return (
    <Card>

      <PhotoArea>

        {/* 배경 패턴 */}
        <BgImg src={sparkleImg} alt="" />

        {/* 프로필 이미지가 있으면 출력 */}
        {img
          ? <ProfileImg src={img} alt={name} />

          /* 없으면 기본 스마일 이미지 */
          : <SmileImg src={smileImg} alt="smile" />
        }

      </PhotoArea>

      {/* 이름 / 정보 */}
      <InfoArea>

        <Name>{name}</Name>

        <Detail>{info}</Detail>

      </InfoArea>

    </Card>
  );
}

export default InfoBox;