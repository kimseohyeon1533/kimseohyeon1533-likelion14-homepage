import styled from "styled-components";

const StyledButton = styled.button`
  padding: 6px 16px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  background-color: ${({ $active }) => ($active ? "#a3e635" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#1a1a1a" : "#6b7280")};
  border: 1.5px solid ${({ $active }) => ($active ? "#84cc16" : "#d1d5db")};

  &:hover {
    background-color: ${({ $active }) => ($active ? "#84cc16" : "#f3f4f6")};
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