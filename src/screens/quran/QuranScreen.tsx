import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, TouchableOpacity } from "react-native";
import { useQuery } from "react-query";
import images from "../../../assets/images";
import Card from "../../components/Card";
import CustomButton from "../../components/CustomButton";
import JuzaCard from "../../components/JuzaCard";
import MultiSelect from "../../components/MultiSelect";
import SurahCard from "../../components/SurahCard";
import { Text } from "../../components/typography";
import Quran from "../../endpoints/quranEndpoints";
import { colors } from "../../infrastructure/theme/colors";
import { CardContainer, QuranList, Row } from "./Quran.styles";

function QuranScreen({ navigation }: any) {
  const [selected, useSelected] = useState("surah");
  const {
    data: chaptersList,
    isLoading: chaptersListLoading,
    error,
  }: any = useQuery(["quran"], () => Quran.getChaptersList());

  const { data: juzaList, isLoading: juzaListLoading } = useQuery(
    ["juza"],
    () => {
      return Quran.getJuzaList();
    }
  );

  return (
    <>
      <MultiSelect selected={selected} useSelected={useSelected} />

      {chaptersListLoading ? (
        <Text variant="caption">Loading ...</Text>
      ) : selected === "surah" ? (
        <QuranList
          data={chaptersList.chapters}
          renderItem={({ item }: any) => (
            <SurahCard
              onPress={() =>
                navigation.navigate("ChapterScreen", {
                  surah: item.id,
                })
              }
              arabicName={item.name_arabic}
              englishName={item.name_complex}
              id={item.id}
              versesNumber={item.verses_count}
            />
          )}
          ListHeaderComponent={() => (
            <CardContainer>
              <Card image={images.quran}>
                <>
                  <Text variant="header" color={"white"}>
                    Al-Falaq
                  </Text>
                  <Text variant="header" color="white">
                    120
                  </Text>
                  <Row>
                    <Text variant="caption" color="white">
                      Complete a Khatama
                    </Text>
                    <Ionicons
                      name="arrow-forward-circle"
                      size={15}
                      color={colors.brand.primary}
                      style={{ marginLeft: 5 }}
                    />
                  </Row>
                </>
              </Card>
            </CardContainer>
          )}
          keyExtractor={(item, index: number) => `${index}`}
        />
      ) : (
        !juzaListLoading &&
        juzaList?.juzs?.map((item: any) => {
          console.log(juzaList.juzs[0]);
          return (
            <Text
              variant="header"
              onPress={() => navigation.navigate("JuzaScreen")}
            >
              {item.first_verse_id}
            </Text>
          );
        })
      )}
    </>
  );
}

export default QuranScreen;
