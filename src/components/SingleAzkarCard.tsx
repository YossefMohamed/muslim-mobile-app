import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components";
import { colors } from "../infrastructure/theme/colors";
import { Text } from "./typography";

const SingleAzkarCard = ({
  title,
  description,
  onPressPlay,
  soundState,
}: {
  soundState: string;
  title: string;
  description: string;
  onPressPlay?: () => void;
}) => {
  console.log(soundState);
  return (
    <CardContainer>
      <Row>
        <CardImage name="book-outline" size={35} color="black"></CardImage>
        <Column>
          <Text variant="caption">أذكار</Text>
          <Text variant="caption" color={colors.text.secondary}>
            {title}
          </Text>
        </Column>
        <IconsRow>
          {soundState === "loading" ? (
            <Text variant="caption">loading</Text>
          ) : (
            <Ionicons
              name={soundState}
              size={25}
              onPress={onPressPlay}
            ></Ionicons>
          )}
          <Ionicons name="ios-share-social" size={25}></Ionicons>
        </IconsRow>
      </Row>
      <ContentRow
        contentContainerStyle={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flex: 1,
        }}
      >
        <ArabicContainer>
          <Text variant="header" style={{ textAlign: "center" }}>
            {description}
          </Text>
        </ArabicContainer>
      </ContentRow>
    </CardContainer>
  );
};

const CardContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.bg.primary};
  elevation: 4;
  margin: ${(props) => props.theme.space[2]} 0;
  padding: ${(props) => props.theme.space[2]};
  border-radius: 10px;
  flex: 1;
`;
const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContentRow = styled.ScrollView`
  flex: 1;
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
export default SingleAzkarCard;
