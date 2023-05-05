import axios from "axios";
import { Audio } from "expo-av";
import React from "react";
import { View } from "react-native";
import { useQuery } from "react-query";
import CustomButton from "../../components/CustomButton";
import SingleAzkarCard from "../../components/SingleAzkarCard";
import { Text } from "../../components/typography";
import { Container, Row } from "./SingleAzkar.styles";

const SingleAzkarScreen = ({ route, navigation }: any) => {
  const { title, url } = route.params;
  const {
    data: singleAzkarList,
    isLoading: singleAzkarListLoading,
    error,
  }: any = useQuery(["azkar"], async () => {
    const data = await axios.get(url);
    return data.data[title];
  });

  const [soundStatus, setSound] = React.useState("play-outline");

  const [sound, setSoundAudio] = React.useState(new Audio.Sound());
  async function playSound() {
    try {
      if (soundStatus === "loading") return;
      setSound("loading");

      if (soundStatus === "pause-outline") {
        setSound("play-outline");
        await sound.pauseAsync();
        setSoundAudio(new Audio.Sound());
        return;
      }

      await sound.loadAsync({
        uri: singleAzkarList[currentAzkar].AUDIO,
      });

      await sound.playAsync();
      setSound("pause-outline");
    } catch (error) {
      console.log(error);
    }
  }

  async function stopSound() {
    setSound("play-outline");
    await sound.pauseAsync();
    setSoundAudio(new Audio.Sound());
  }
  const [current, setCurrent] = React.useState(0);

  const [currentAzkar, setCurrentAzkar] = React.useState(0);
  React.useEffect(() => {
    if (current >= singleAzkarList[currentAzkar].REPEAT) {
      if (currentAzkar < singleAzkarList.length) {
        setCurrent(0);
        setSound("play-outline");
        sound.pauseAsync().then(() => console.log("stopped audio"));
        setSoundAudio(new Audio.Sound());
        setCurrentAzkar((prev) => ++prev);
      }
    }
  }, [current, singleAzkarList, sound]);

  return (
    <Container>
      {singleAzkarListLoading ? (
        <Text variant="caption">Loading...</Text>
      ) : (
        <>
          <SingleAzkarCard
            onPressPlay={playSound}
            title={title}
            soundState={soundStatus}
            description={singleAzkarList[currentAzkar].ARABIC_TEXT}
          />

          <Row>
            {currentAzkar !== singleAzkarList.length - 1 && (
              <Row>
                <CustomButton
                  text="التالي"
                  onPress={() => {
                    setCurrentAzkar((prev) => ++prev);
                    stopSound();
                  }}
                />
              </Row>
            )}

            {currentAzkar !== singleAzkarList.length - 1 && (
              <Row>
                <CustomButton
                  text={`${current} من ${singleAzkarList[currentAzkar].REPEAT}`}
                  onPress={() => setCurrent((prev) => ++prev)}
                />
              </Row>
            )}
            {currentAzkar !== 0 && (
              <Row>
                <CustomButton
                  text="رجوع"
                  onPress={() => {
                    setCurrentAzkar((prev) => --prev);
                    stopSound();
                  }}
                />
              </Row>
            )}
          </Row>
          <Row>
            <CustomButton
              link
              text="الرجوع للأذكار"
              onPress={() => {
                stopSound();

                navigation.navigate("AzkarScreen");
              }}
            />
          </Row>
        </>
      )}
    </Container>
  );
};

export default SingleAzkarScreen;
