import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image } from "react-native";
import styled from "styled-components";
import images from "../../assets/images";
import { colors } from "../infrastructure/theme/colors";
import CustomButton from "./CustomButton";
import { Text } from "./typography";

const QuestionCard = () => {
  return (
    <CardContainer>
      <Row>
        <CardImage
          name="ios-newspaper-outline"
          size={35}
          color="black"
        ></CardImage>
        <Column>
          <Text variant="caption">Did you read Quran today?</Text>
          <Text variant="caption" color={colors.text.secondary}>
            Daily Goals
          </Text>
        </Column>
        <IconsRow></IconsRow>
      </Row>
      <Row>
        <ImageContainer source={images.question} resizeMode="contain" />
        <ButtonContainer>
          <CustomButton onPress={console.log} text="Yes" />
          <CustomButton onPress={console.log} text="Not yet" link />
        </ButtonContainer>
      </Row>
    </CardContainer>
  );
};

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex: 1;
`;

const ImageContainer = styled.Image`
  width: 50%;
  height: 150px;
`;

const CardContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.bg.primary};
  elevation: 4;
  margin: ${(props) => props.theme.space[2]} 0;
  padding: ${(props) => props.theme.space[2]};
  border-radius: 10px;
`;
const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const CardImage = styled(Ionicons)`
  padding: ${(props) => props.theme.space[1]};
  color: ${(props) => props.theme.colors.brand.primary};
  margin-right: 15px;
`;
const Column = styled.View`
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.space[3]};
`;

const ArabicContainer = styled.View`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(props) => props.theme.space[2]} 0;
`;

const IconsRow = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  justify-content: flex-end;
  align-items: center;
`;
export default QuestionCard;
