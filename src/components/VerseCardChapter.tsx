import { Ionicons } from "@expo/vector-icons";
import React from "react";
import styled from "styled-components";
import { colors } from "../infrastructure/theme/colors";
import { Text } from "./typography";
import { Audio } from "expo-av";

const VerseCardChapter: React.FC<{
  arabic: string;
  english: string;
  tafseer?: boolean;
  infoClick?: () => void;
}> = ({ arabic, english, infoClick, tafseer }) => {
  const [sound, setSound] = React.useState<any>();

  async function playSound() {
    console.log("Loading Sound");
    const sound = new Audio.Sound();
    setSound(sound);
    await sound.loadAsync({
      uri: "https://cdn.islamic.network/quran/audio/128/ar.alafasy/26.mp3",
    });

    await sound.playAsync();
    console.log("Playing Sound");
  }

  return (
    <CardContainer>
      <Row>
        <ArabicContainer>
          <Text variant="body">{arabic}</Text>
        </ArabicContainer>
      </Row>

      <Row>
        <EnglishContainer>
          <Text variant="body">{english} </Text>
        </EnglishContainer>
      </Row>
      <Row>
        {!tafseer && (
          <IconsRow>
            <Ionicons
              name="information-circle-sharp"
              size={25}
              color={colors.brand.primary}
              onPress={infoClick}
            ></Ionicons>
            <Ionicons
              name="play"
              size={25}
              color={colors.brand.primary}
              onPress={playSound}
            ></Ionicons>
            <Ionicons
              name="ios-share-social"
              size={25}
              color={colors.brand.primary}
            ></Ionicons>
          </IconsRow>
        )}
      </Row>
    </CardContainer>
  );
};

const CardContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.bg.primary};
  elevation: 4;
  margin: ${(props) => props.theme.space[2]} 0;
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[2]};
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.colors.brand.secondary};
`;
const Row = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: ${(props) => props.theme.space[2]} 0;
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
  display: flex;
  justify-content: center;
  flex: 1;

  margin: ${(props) => props.theme.space[2]} 0;
`;

const EnglishContainer = styled.View`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  border-top: 2px solid ${(props) => props.theme.colors.brand.secondary};
  border-bottom: 2px solid ${(props) => props.theme.colors.brand.secondary};
`;

const IconsRow = styled.View`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  justify-content: flex-end;
  align-items: center;
`;
export default VerseCardChapter;
