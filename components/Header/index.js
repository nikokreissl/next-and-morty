import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Next and Morty</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  text-align: center;
  background-color: var(--primary-background-color);
  padding: 15px;
  font-size: 0.7rem;
`;
