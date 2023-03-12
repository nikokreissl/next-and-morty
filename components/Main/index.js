import styled from "styled-components";

export default function Main({ children }) {
  return <StyledMain>{children}</StyledMain>;
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px;
`;
