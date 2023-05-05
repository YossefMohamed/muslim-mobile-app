import React from "react";
import styled from "styled-components/native";

function CustomTextInput({
  value,
  name,
  placeholder,
  secureTextEntry,
  onChangeText,
  onBlur,
  keyboardType,
  multiline,
  error,
  ...props
}: {
  name?: string;
  value: string;
  multiline?: boolean;
  placeholder: string;
  secureTextEntry?: boolean;
  error?: boolean;
  onChangeText: (text: string) => void;
  onBlur?: any;
  keyboardType?: any;
}) {
  console.log(multiline);
  return (
    <CustomTextInputStyled
      onBlur={onBlur}
      error={error}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      value={value}
      name={name}
      hasValue={!!value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      multiline={multiline}
      numberOfLines={multiline ? 3 : 1}
      {...props}
    />
  );
}

export default CustomTextInput;

const CustomTextInputStyled = styled.TextInput<{
  hasValue: boolean;
  error: boolean;
  multiline: boolean;
}>`
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[1]};
  margin: ${(props) => props.theme.space[1]} 0;
  border :transparent 2px solid
  ${(props) =>
    props.hasValue && ` border :${props.theme.colors.brand.primary} 2px solid `}
  background-color: ${(props) => props.theme.colors.bg.primary};
  elevation: 2;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
  ${(props) => props.error && `border-color:${props.theme.colors.text.error}`}
`;
