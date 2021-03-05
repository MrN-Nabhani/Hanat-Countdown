import styled, { css } from "styled-components";

const Section=styled.section`
width: ${({ width }) => (width||'150px')};
height: ${({ height }) => (height||'150px')};
background-color: ${({ backgroundColor }) => (backgroundColor)};
border-radius: ${({ radius }) => (radius||'0px')};
opacity: ${({ opacity }) => (opacity||'1')};
`;
export default Section;