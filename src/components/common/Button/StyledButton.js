import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  outline: none;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  color: ${({ theme, color }) => theme.colors[color]};
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;
export default Button;
