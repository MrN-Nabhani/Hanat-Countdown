import styled, { css } from "styled-components";
import Header from "../../common/Typography/StyledHeader";
import LargeHeader from "../../common/Typography/StyledLargeHeader";

export const CardTitle = styled(Header)``;

export const CardTime = styled(LargeHeader)`
  text-align: center;
`;

const CardSection = styled.div`
  height: 100px;
  padding: 1rem;
  margin: 1rem 0;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
`;

export default CardSection;
