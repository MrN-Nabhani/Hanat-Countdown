import styled, { css } from "styled-components";
import Header from "../../common/Typography/StyledHeader";
import LargeHeader from "../../common/Typography/StyledLargeHeader";

export const CardTitle = styled(Header)``;

export const CardTime = styled(LargeHeader)`
  font-size: 25pt;
  text-align: center;
  margin: 1rem;
`;

const CardSection = styled.div`
  height: 150px;
  padding: 1rem;
  margin: 1rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
`;

export default CardSection;
