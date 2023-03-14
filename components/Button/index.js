import styled from "styled-components";

export default function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: var(--secondary-background-color);
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: var(--primary-background-color);
  }
`;
