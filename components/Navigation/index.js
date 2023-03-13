import styled from "styled-components";
import Link from "next/link";

export default function Navigation() {
  return (
    <StyledNavigation>
      <StyledNavigationList>
        <StyledNavigationItem>
          <StyledNavigationLink href={"/"}>Home</StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink href={"/"}>Random</StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink href={"/"}>Favorites</StyledNavigationLink>
        </StyledNavigationItem>
        <StyledNavigationItem>
          <StyledNavigationLink href={"/"}>Get creative</StyledNavigationLink>
        </StyledNavigationItem>
      </StyledNavigationList>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const StyledNavigationList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  height: 70px;
  background-color: var(--primary-background-color);
`;

const StyledNavigationItem = styled.li`
  flex: 1;
  text-align: center;
`;

const StyledNavigationLink = styled(Link)`
  display: block;
  width: 100%;
  height: 100%;
  line-height: 70px;
  &:hover {
    background-color: var(--secondary-background-color);
  }
`;
