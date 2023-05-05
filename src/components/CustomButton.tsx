import React from "react";
import styled from "styled-components/native";

const CustomButton = ({
  text,
  onPress,
  link = false,
}: {
  text: string;

  onPress: () => void;
  link?: boolean;
}) => {
  return (
    <ButtonContainer onPress={onPress} link={link}>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.TouchableOpacity<{
  link: boolean;
}>`
  background: ${(props) =>
    props.link
      ? props.theme.colors.brand.dark
      : props.theme.colors.brand.primary};
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[1]};
  border-radius: ${(props) => props.theme.space[1]};
  min-width: 60px;
  max-height: 40px;
  justify-content: center;
  align-items: center;
  elevation: 5;
`;

const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.text.inverse};
  font-size: ${(props) => props.theme.fontSizes.button};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  text-align: center;
`;
export default CustomButton;
