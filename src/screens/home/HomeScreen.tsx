import React from "react";
import { Text } from "../../components/typography";
import {
  ButtonContainer,
  CardContainer,
  HeaderRow,
  HomeContainer,
  LocationContainer,
  Row,
  SecCardContainer,
  ThirdCardContainer,
  UserContainer,
} from "./Home.styles";
import { Ionicons } from "@expo/vector-icons";
import Card from "../../components/Card";
import images from "../../../assets/images";
import CatCard from "../../components/CatCard";
import CustomButton from "../../components/CustomButton";
import VerseCard from "../../components/VerseCard";
import QuestionCard from "../../components/QuestionCard";
import { ScrollView } from "react-native";

function HomeScreen({ navigation }: any) {
  return (
    <ScrollView>
      <HeaderRow>
        <UserContainer>
          <Ionicons
            name="person"
            size={15}
            color="black"
            style={{
              marginRight: 7,
            }}
          />

          <Text variant="hint">Yossef</Text>
        </UserContainer>
        <LocationContainer>
          <Ionicons
            name="location"
            size={15}
            color="black"
            style={{
              marginRight: 7,
            }}
          />

          <Text variant="hint">Egypt</Text>
        </LocationContainer>
      </HeaderRow>

      <Row>
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

        <CardContainer>
          <SecCardContainer>
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
          </SecCardContainer>

          <ThirdCardContainer>
            <Card image={images.calendar}>
              <>
                <Text variant="hint" color="white">
                  06 Ramadan, 1444
                </Text>
                <Text variant="caption" color="white">
                  Friday, July 23, 2020
                </Text>
              </>
            </Card>
          </ThirdCardContainer>
        </CardContainer>
      </Row>

      <Row>
        <CatCard
          icon={"alarm-outline"}
          title="Prayer Time"
          onPress={() => navigation.negative("QuranScreen")}
        />
        <CatCard icon={"book-outline"} title="Read Quran" />
        <CatCard icon={"moon-outline"} title="Duaa" />
        <CatCard icon={"compass-outline"} title="Qubila" />
      </Row>

      <VerseCard />
      <QuestionCard />

      <VerseCard />
      <QuestionCard />

      <VerseCard />
    </ScrollView>
  );
}

export default HomeScreen;
