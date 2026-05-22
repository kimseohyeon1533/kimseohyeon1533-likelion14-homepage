import { useState } from "react";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopSection from "./TopSection";
import InfoBox from "./InfoBox";
import { data14, data13, data12, data11 } from "./MemberData";

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5eb;
  font-family: 'Noto Sans KR', sans-serif;
`;

const Content = styled.main`
  flex: 1;
  padding-bottom: 60px;
`;

const SectionBlock = styled.div`
  padding: 36px 40px 0;
`;

const SectionTitle = styled.h3`
  font-size: 17px;
  font-weight: 800;
  color: #111111;
  margin: 0 0 22px;
  font-family: 'Noto Sans KR', sans-serif;
`;

/* 대표/부대표: 왼쪽 정렬, 붙어있게 */
const LeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  margin-bottom: 32px;
`;

const RoleGroup = styled.div``;

const RoleLabel = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #333330;
  margin: 0 0 10px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 150px);
  gap: 10px;
`;

const RoleSection = styled.div`
  margin-bottom: 32px;
`;

const dataMap = {
  "14기": data14,
  "13기": data13,
  "12기": data12,
  "11기": data11,
};

function Members() {
  const [activeGen, setActiveGen] = useState("14기");
  const d = dataMap[activeGen];

  return (
    <PageWrapper>
      <Header />
      <Content>
        <TopSection active={activeGen} onSelect={setActiveGen} />

        {/* 운영진 */}
        <SectionBlock>
          <SectionTitle>운영진</SectionTitle>

          <LeaderRow>
            <RoleGroup>
              <RoleLabel>대표</RoleLabel>
              <CardGrid>
                {d.운영진.대표.map((m, i) => <InfoBox key={i} {...m} />)}
              </CardGrid>
            </RoleGroup>
            <RoleGroup>
              <RoleLabel>부대표</RoleLabel>
              <CardGrid>
                {d.운영진.부대표.map((m, i) => <InfoBox key={i} {...m} />)}
              </CardGrid>
            </RoleGroup>
          </LeaderRow>

          {["PO", "FRONTEND", "BACKEND"].map((role) => (
            <RoleSection key={role}>
              <RoleLabel>{role}</RoleLabel>
              <CardGrid>
                {d.운영진[role].map((m, i) => <InfoBox key={i} {...m} />)}
              </CardGrid>
            </RoleSection>
          ))}
        </SectionBlock>

        {/* 아기사자 */}
        <SectionBlock>
          <SectionTitle>아기사자</SectionTitle>
          {["PO", "FRONTEND", "BACKEND"].map((role) => (
            <RoleSection key={role}>
              <RoleLabel>{role}</RoleLabel>
              <CardGrid>
                {d.아기사자[role].map((m, i) => <InfoBox key={i} {...m} />)}
              </CardGrid>
            </RoleSection>
          ))}
        </SectionBlock>
      </Content>
      <Footer />
    </PageWrapper>
  );
}

export default Members;