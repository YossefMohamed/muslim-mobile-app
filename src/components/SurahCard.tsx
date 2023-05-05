import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image } from "react-native";
import styled from "styled-components";
import images from "../../assets/images";
import { colors } from "../infrastructure/theme/colors";
import CustomButton from "./CustomButton";
import { Text } from "./typography";

const SurahCard: React.FC<{
  onPress: (surah: number) => void;
  arabicName: string;
  id: number;
  englishName: string;
  versesNumber: number;
}> = ({ arabicName, id, englishName, versesNumber, onPress }) => {
  return (
    <CardContainer onPress={onPress}>
      <Row>
        <Text variant="caption">{id}.</Text>
        <Column>
          <Text variant="label" color={colors.brand.primary}>
            {englishName}
          </Text>
          <Text variant="caption" color={colors.text.secondary}>
            {versesNumber} verses
          </Text>
        </Column>
        <IconsRow>
          <Text variant="label">{arabicName}</Text>
        </IconsRow>
      </Row>
    </CardContainer>
  );
};

const CardContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.bg.primary};
  elevation: 4;
  margin: ${(props) => props.theme.space[2]} 0;
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[3]};
  border-radius: 10px;
`;
const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Column = styled.View`
  display: flex;
  margin: 0 ${(props) => props.theme.space[3]};

  flex: 1;
`;

const IconsRow = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  justify-content: flex-end;
  align-items: center;
`;
export default SurahCard;
