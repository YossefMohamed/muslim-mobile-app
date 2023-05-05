import React from "react";
import { useQuery } from "react-query";
import SurahCard from "../../components/SurahCard";
import { Text } from "../../components/typography";
import VerseCard from "../../components/VerseCard";
import VerseCardChapter from "../../components/VerseCardChapter";
import Quran from "../../endpoints/quranEndpoints";
import { ChapterContainer } from "./Chapter.styles";

const ChapterScreen = ({ route, navigation }: any) => {
  const { surah } = route.params;
  const {
    data: chapterData,
    isLoading: chapterLoading,
    error,
  }: any = useQuery(["chapter"], () => Quran.getChapterById(surah));
  return (
    <ChapterContainer>
      {chapterLoading ? (
        <Text variant="caption">Loading...</Text>
      ) : (
        <>
          <SurahCard
            arabicName={chapterData.data[0].name}
            englishName={chapterData.data[1].englishName}
            id={chapterData.data[0].number}
            onPress={() => null}
            versesNumber={chapterData.data[0].numberOfAyahs}
          />

          {chapterData.data[0].ayahs.map(
            ({ text }: { text: string }, idx: number) => {
              return (
                <VerseCardChapter
                  key={idx}
                  infoClick={() => {
                    navigation.navigate("VerseScreen", {
                      arText: text,
                      enText: chapterData?.data[1].ayahs[idx].text,
                      number: chapterData?.data[1].ayahs[idx].number,
                    });
                  }}
                  arabic={text}
                  english={chapterData?.data[1].ayahs[idx].text}
                />
              );
            }
          )}
        </>
      )}
    </ChapterContainer>
  );
};

export default ChapterScreen;
