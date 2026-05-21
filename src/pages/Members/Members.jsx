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
  background-color: #fafaf5;
`;

const Content = styled.main`
  flex: 1;
  padding-bottom: 60px;
`;

const SectionBlock = styled.div`
  padding: 32px 40px 0;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 800;
  color: #111111;
  margin: 0 0 20px;
`;

/* 대표/부대표 나란히 */
const LeaderRow = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 28px;
`;

const RoleGroup = styled.div``;

const RoleLabel = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #374151;
  margin: 0 0 10px;
`;

const CardRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const RoleSection = styled.div`
  margin-bottom: 28px;
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

          {/* 대표 / 부대표 */}
          <LeaderRow>
            <RoleGroup>
              <RoleLabel>대표</RoleLabel>
              <CardRow>
                {d.운영진.대표.map((m, i) => <InfoBox key={i} {...m} />)}
              </CardRow>
            </RoleGroup>
            <RoleGroup>
              <RoleLabel>부대표</RoleLabel>
              <CardRow>
                {d.운영진.부대표.map((m, i) => <InfoBox key={i} {...m} />)}
              </CardRow>
            </RoleGroup>
          </LeaderRow>

          {/* PO */}
          <RoleSection>
            <RoleLabel>PO</RoleLabel>
            <CardRow>
              {d.운영진.PO.map((m, i) => <InfoBox key={i} {...m} />)}
            </CardRow>
          </RoleSection>

          {/* FRONTEND */}
          <RoleSection>
            <RoleLabel>FRONTEND</RoleLabel>
            <CardRow>
              {d.운영진.FRONTEND.map((m, i) => <InfoBox key={i} {...m} />)}
            </CardRow>
          </RoleSection>

          {/* BACKEND */}
          <RoleSection>
            <RoleLabel>BACKEND</RoleLabel>
            <CardRow>
              {d.운영진.BACKEND.map((m, i) => <InfoBox key={i} {...m} />)}
            </CardRow>
          </RoleSection>
        </SectionBlock>

        {/* 아기사자 */}
        <SectionBlock>
          <SectionTitle>아기사자</SectionTitle>

          {["PO", "FRONTEND", "BACKEND"].map((role) => (
            <RoleSection key={role}>
              <RoleLabel>{role}</RoleLabel>
              <CardRow>
                {d.아기사자[role].map((m, i) => <InfoBox key={i} {...m} />)}
              </CardRow>
            </RoleSection>
          ))}
        </SectionBlock>
      </Content>
      <Footer />
    </PageWrapper>
  );
}

export default Members;