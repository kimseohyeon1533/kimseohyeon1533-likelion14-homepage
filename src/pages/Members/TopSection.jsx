import styled from "styled-components";
import Button from "./Button";

/* 제목 이미지 */
import frameImg from "../../assets/images/frame.png";

const Section = styled.div`
  padding: 32px 40px 0;
  font-family: 'Noto Sans KR', sans-serif;
`;

/* =========================================================
   제목 이미지 영역
========================================================= */
const TitleImage = styled.img`
  height: 42px;
  object-fit: contain;

  margin-bottom: 8px;

  display: block;
`;

const SubText = styled.p`
  margin: 0 0 18px;
  font-size: 12px;
  color: #000000;
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

      {/* 제목 이미지 */}
      <TitleImage
        src={frameImg}
        alt="구성원"
      />

      <SubText>
        서경대학교 멋쟁이사자처럼의 구성원들을 살펴보세요.
      </SubText>

      <ButtonRow>
        {GENERATIONS.map((gen) => (
          <Button
            key={gen}
            label={gen}
            active={active === gen}
            onClick={() => onSelect(gen)}
          />
        ))}
      </ButtonRow>

      <Divider />
    </Section>
  );
}

export default TopSection;