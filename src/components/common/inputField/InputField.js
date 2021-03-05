import React from "react";
import { StyledInputField, Input, Label } from "./StyledInputField";

function InputField({
  name,
  value,
  type,
  label,
  placeholder,
  required,
  handleChange,
}) {
  return (
    <StyledInputField>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required={required}
      />
    </StyledInputField>
  );
}

export default InputField;
