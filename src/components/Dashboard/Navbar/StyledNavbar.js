import styled from "styled-components";

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default StyledNavbar;
