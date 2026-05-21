import styled from "styled-components";

const Card = styled.div`
  width: 90px;
  border: 1px solid #d1d5db;
  border-radius: 3px;
  overflow: hidden;
  background-color: #ffffff;
  flex-shrink: 0;
`;

const PhotoArea = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #f3f4f6;
  overflow: hidden;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const InfoArea = styled.div`
  padding: 6px 8px;
  border-top: 1px solid #d1d5db;
`;

const Name = styled.p`
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  color: #111111;
`;

const Detail = styled.p`
  margin: 2px 0 0;
  font-size: 10px;
  color: #6b7280;
`;

function InfoBox({ name, info, img }) {
  return (
    <Card>
      <PhotoArea>
        <Photo src={img} alt={name} />
      </PhotoArea>
      <InfoArea>
        <Name>{name}</Name>
        <Detail>{info}</Detail>
      </InfoArea>
    </Card>
  );
}

export default InfoBox;