import styled, { css } from "styled-components";

const Container = styled.div`
margin-top: ${({ marginTop }) => (marginTop||'0px')};
margin-left: ${({ marginLeft }) => (marginLeft||'0px')};
margin-right: ${({ marginRight }) => (marginRight||'0px')};
margin-bottom:${({ marginBottom }) => (marginBottom||'0px')};
padding-top: ${({ paddingTop }) => (paddingTop||'0px')};
padding-bottom: ${({ paddingBottom }) => (paddingBottom||'0px')};
padding-right: ${({ paddingRight }) => (paddingRight||'0px')};
padding-left : ${({ paddingLeft }) => (paddingLeft||'0px')};
`;

export default Container;
