import styled, { css } from "styled-components";

const Button=styled.button`
width: ${({ width }) => (width||'150px')};
height: ${({ height }) => (height||'30px')};
background-color: ${({ backgroundColor }) => (backgroundColor||'white')};
border-radius: 6px;
border: 1px solid;
outline:none;
color:white;
margin-top: ${({ marginTop }) => (marginTop||'0px')};
margin-left: ${({ marginLeft }) => (marginLeft||'0px')};
        &:hover {
            cursor: pointer;
            font-weight: bold;
        }
`;
export default Button;