import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components";
import { colors } from "../infrastructure/theme/colors";
import { Text } from "./typography";

const VerseCard = ({}) => {
  return (
    <CardContainer>
      <Row>
        <CardImage name="book-outline" size={35} color="black"></CardImage>
        <Column>
          <Text variant="caption">Verse to remember</Text>
          <Text variant="caption" color={colors.text.secondary}>
            Al-Baq`arah 221
          </Text>
        </Column>
        <IconsRow>
          <Ionicons name="play" size={25}></Ionicons>
          <Ionicons name="ios-share-social" size={25}></Ionicons>
        </IconsRow>
      </Row>
      <Row>
        <ArabicContainer>
          <Text variant="body" style={{ textAlign: "center" }}>
            إِنَّمَا يَأۡمُرُكُم بِٱلسُّوٓءِ وَٱلۡفَحۡشَآءِ وَأَن تَقُولُواْ
            عَلَى ٱللَّهِ مَا لَا تَعۡلَمُونَ
          </Text>
        </ArabicContainer>
      </Row>
      <Row>
        <Text variant="label" style={{ textAlign: "center" }}>
          "He only orders you to evil and immorality what.....""
        </Text>
      </Row>
    </CardContainer>
  );
};

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
export default VerseCard;
