import styled from "styled-components";

const StyledButton = styled.button`
  padding: 6px 18px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  transition: all 0.15s ease;
  background-color: ${({ $active }) => ($active ? "#c8e84c" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#1a1a1a" : "#888880")};
  border: 1.5px solid ${({ $active }) => ($active ? "#b8d83c" : "#cccccc")};

  &:hover {
    background-color: ${({ $active }) => ($active ? "#b8d83c" : "#f0f0e8")};
  }
`;

function Button({ label, active, onClick }) {
  return (
    <StyledButton $active={active} onClick={onClick}>
      {label}
    </StyledButton>
  );
}

export default Button;