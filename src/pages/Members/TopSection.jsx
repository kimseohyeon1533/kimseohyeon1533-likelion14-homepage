import styled from "styled-components";
import Button from "./Button";

const Section = styled.div`
  padding: 32px 40px 0;
  font-family: 'Noto Sans KR', sans-serif;
`;

const TitleBox = styled.div`
  display: inline-flex;
  align-items: center;
  border: 1.5px solid #222222;
  padding: 5px 14px;
  border-radius: 3px;
  margin-bottom: 8px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 800;
  color: #111111;
  font-family: 'Noto Sans KR', sans-serif;
`;

const SubText = styled.p`
  margin: 0 0 18px;
  font-size: 12px;
  color: #888880;
  font-family: 'Noto Sans KR', sans-serif;
`;

const ButtonRow = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 24px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddddd0;
  margin: 0;
`;

const GENERATIONS = ["14기", "13기", "12기", "11기"];

function TopSection({ active, onSelect }) {
  return (
    <Section>
      <TitleBox>
        <Title>구성원</Title>
      </TitleBox>
      <SubText>서경대학교 멋쟁이사자처럼의 구성원들을 살펴보세요.</SubText>
      <ButtonRow>
        {GENERATIONS.map((gen) => (
          <Button key={gen} label={gen} active={active === gen} onClick={() => onSelect(gen)} />
        ))}
      </ButtonRow>
      <Divider />
    </Section>
  );
}

export default TopSection;