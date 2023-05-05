import React from "react";
import { ScrollView } from "react-native";
import images from "../../../assets/images";
import Card from "../../components/Card";
import PrayerTimeCard from "../../components/PrayerTimeCard";
import { Text } from "../../components/typography";
import { CardContainer, TextCenter } from "./Prayer.styles";
import { useQuery } from "react-query";
import axios from "axios";
import { useLocationStore } from "../../store/store";
import moment from "moment";

function PrayerScreen({ navigation }: any) {
  const { long, lat } = useLocationStore();
  console.log(`latitude=${lat}&longitude=${long}`);

  const {
    data: prayerData,
    isLoading: prayerLoading,
    error,
  }: any = useQuery(["prayer"], async () => {
    const today = moment(new Date()).format("MM-DD-YYYY");

    const { data } = await axios.get(
      `http://api.aladhan.com/v1/timings/${today}?latitude=${lat}&longitude=${long}`
    );
    return data;
  });

  return (
    <ScrollView>
      {prayerLoading ? (
        <Text variant="caption">Loading...</Text>
      ) : (
        <>
          <CardContainer>
            <Card image={images.evening}>
              <>
                <Text variant="caption" color="white">
                  Next Pary
                </Text>
                <Text variant="header" color="white">
                  Fajr
                </Text>
                <Text variant="header" color="white">
                  04:30 am
                </Text>
                <Text variant="caption" color="white">
                  1:30:50
                </Text>
              </>
            </Card>
          </CardContainer>
          <TextCenter variant="header">Today</TextCenter>
          {prayerData &&
            Object.keys(prayerData.data.timings).map((key: string) => {
              console.log(
                moment(prayerData.data.timings[key], "h:mm a").fromNow()
              );
              return (
                <PrayerTimeCard
                  salah={key}
                  time={moment(prayerData.data.timings[key], "h:mm a").format(
                    "h:mm a"
                  )}
                  key={key}
                />
              );
            })}
        </>
      )}
    </ScrollView>
  );
}

export default PrayerScreen;
