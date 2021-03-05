import styled, { css } from "styled-components";
import Section from "../../../common/Section/Section.js";
const CardSection=styled(Section)`
width: ${({ width }) => (width||'150px')};
height: ${({ height }) => (height||'150px')};
background-color:#DC08AB;
border-radius: ${({ radius }) => (radius||'0px')};
opacity: ${({ opacity }) => (opacity||'1')};
`;
export default CardSection;