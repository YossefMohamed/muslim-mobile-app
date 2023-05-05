import styled from "styled-components";
export const LoginContainer = styled.View`
  margin-top: 10%;
  height: 90%;
  padding: 0 ${(props) => props.theme.space[3]};
`;
export const ImageContainer = styled.Image`
  width: 250px;
  height: 250px;
  margin: auto;
`;

export const TextInputContainer = styled.View`
  margin: ${(props) => props.theme.space[1]} 0;
`;
export const Center = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CustomScreenHeader = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: ${(props) => props.theme.fontSizes.h3};
`;

export const CaptionContainer = styled.View`
  padding: ${(props) => props.theme.space[3]} 0;
`;
export const HeaderBold = styled.Text`
  color: ${(props) => props.theme.colors.brand.primary};
  font-size: ${(props) => props.theme.fontSizes.h3};
  text-transform: uppercase;
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const LinkContainer = styled.View`
  margin: ${(props) => props.theme.space[3]} 0;
`;

export const ForgetPasswordContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
  text-transform: uppercase;
  margin: ${(props) => props.theme.space[1]} 0;
`;
