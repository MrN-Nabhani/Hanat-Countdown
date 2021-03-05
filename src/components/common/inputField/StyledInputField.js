import styled from "styled-components";

export const StyledInputField = styled.div`
  display: flex;
  margin: 1rem auto;
  width: 35%;
  justify-content: space-between;
  align-items: baseline;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 65%;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid;
  outline: none;
`;

export const Label = styled.label`
  width: 25%;
  text-align: left;
  @media only screen and (max-width: 800px) {
    width: 50%;
    text-align: center;
  }
`;
