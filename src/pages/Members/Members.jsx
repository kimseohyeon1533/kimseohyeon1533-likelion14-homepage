import { useState } from "react";
import styled from "styled-components";

/* 공통 컴포넌트 */
import Footer from "../../components/footer/Footer";

/* 현재 페이지 전용 컴포넌트 */
import TopSection from "./TopSection";
import InfoBox from "./InfoBox";

/* 기수별 멤버 데이터 */
import { data14, data13, data12, data11 } from "./MemberData";

/* 배경 아이콘 이미지 */
import eyeIcon from "../../assets/icons/eye.png";
import eightIcon from "../../assets/icons/8.png";
import catIcon from "../../assets/icons/cat.png";

/* =========================================================
   페이지 전체 레이아웃
========================================================= */
const PageWrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: #fffff6;
  font-family: "Noto Sans KR", sans-serif;
  overflow-x: hidden;
`;

/* =========================================================
   배경 아이콘
========================================================= */
const BgIcon = styled.img`
  position: absolute;
  pointer-events: none;
  z-index: 0;
`;

const EyeIcon = styled(BgIcon)`
  top: 120px;
  right: 40px;
  width: 420px;
`;

const EightIcon = styled(BgIcon)`
  top: 48%;
  left: 20px;
  transform: translateY(-50%);
  width: 340px;
`;

const CatIcon = styled(BgIcon)`
  top: 72%;
  left: 30px;
  width: 420px;
`;

/* =========================================================
   콘텐츠 영역
========================================================= */
const Content = styled.main`
  position: relative;
  z-index: 1;
  padding-bottom: 60px;
`;

/* =========================================================
   섹션 공통
========================================================= */
const SectionBlock = styled.div`
  padding: 36px 40px 0;
`;

const SectionTitle = styled.h3`
  font-size: 17px;
  font-weight: 800;
  color: #111111;
  margin: 0 0 22px;
`;

/* =========================================================
   대표 / 부대표 영역
========================================================= */
const LeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 32px;
`;

const RoleGroup = styled.div``;

const SmallCardRow = styled.div`
  display: flex;
  gap: 10px;
`;

/* =========================================================
   역할 라벨
========================================================= */
const RoleLabel = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #333330;
  margin: 0 0 10px;
`;

/* =========================================================
   카드 그리드
========================================================= */
const CardGrid = styled.div`
  display: grid;

  /* 카드 크기와 맞춤 */
  grid-template-columns: repeat(5, 120px);

  gap: 10px;
`;

const RoleSection = styled.div`
  margin-bottom: 32px;
`;

/* =========================================================
   데이터 연결
========================================================= */
const dataMap = {
  "14기": data14,
  "13기": data13,
  "12기": data12,
  "11기": data11,
};

/* =========================================================
   Members 컴포넌트
========================================================= */
function Members() {

  const [activeGen, setActiveGen] = useState("14기");

  const d = dataMap[activeGen];

  return (
    <PageWrapper>

      {/* 배경 아이콘 */}
      <EyeIcon src={eyeIcon} alt="eye" />
      <EightIcon src={eightIcon} alt="8" />
      <CatIcon src={catIcon} alt="cat" />

      <Content>

        {/* 기수 선택 */}
        <TopSection
          active={activeGen}
          onSelect={setActiveGen}
        />

        {/* =====================================================
            운영진
        ===================================================== */}
        <SectionBlock>

          <SectionTitle>운영진</SectionTitle>

          <LeaderRow>

            {/* 대표 */}
            <RoleGroup>

              <RoleLabel>대표</RoleLabel>

              <SmallCardRow>
                {d.운영진.대표.map((m, i) => (
                  <InfoBox key={i} {...m} />
                ))}
              </SmallCardRow>

            </RoleGroup>

            {/* 부대표 */}
            <RoleGroup>

              <RoleLabel>부대표</RoleLabel>

              <SmallCardRow>
                {d.운영진.부대표.map((m, i) => (
                  <InfoBox key={i} {...m} />
                ))}
              </SmallCardRow>

            </RoleGroup>

          </LeaderRow>

          {/* 역할별 운영진 */}
          {["PO", "FRONTEND", "BACKEND"].map((role) => (

            <RoleSection key={role}>

              <RoleLabel>{role}</RoleLabel>

              <CardGrid>
                {d.운영진[role].map((m, i) => (
                  <InfoBox key={i} {...m} />
                ))}
              </CardGrid>

            </RoleSection>

          ))}
        </SectionBlock>

        {/* =====================================================
            아기사자
        ===================================================== */}
        <SectionBlock>

          <SectionTitle>아기사자</SectionTitle>

          {["PO", "FRONTEND", "BACKEND"].map((role) => (

            <RoleSection key={role}>

              <RoleLabel>{role}</RoleLabel>

              <CardGrid>
                {d.아기사자[role].map((m, i) => (
                  <InfoBox key={i} {...m} />
                ))}
              </CardGrid>

            </RoleSection>

          ))}
        </SectionBlock>

      </Content>

      {/* 푸터 */}
      <Footer />

    </PageWrapper>
  );
}

export default Members;