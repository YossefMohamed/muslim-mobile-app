import React from "react";
import { useQuery } from "react-query";
import SurahCard from "../../components/SurahCard";
import { Text } from "../../components/typography";
import VerseCardChapter from "../../components/VerseCardChapter";
import Quran from "../../endpoints/quranEndpoints";
import { ChapterContainer } from "./Juza.styles";

const JuzaScreen = () => {
  const {
    data: juzaData,
    isLoading: juzaLoading,
    error,
  }: any = useQuery(["juza"], () => Quran.getJuzaById(1));

  const { data: juzaEnglishData, isLoading: juzaEnglishLoading }: any =
    useQuery(["juza"], () => Quran.getEnglishJuzaById(1));
  return (
    <ChapterContainer>
      {/* {!chapterLoading && (
        <SurahCard
          arabicName={chapterData.data.name}
          englishName={chapterData.data.englishName}
          id={chapterData.data.number}
          onPress={() => null}
          versesNumber={chapterData.data.numberOfAyahs}
        />
      )} */}

      {!juzaLoading &&
        juzaData &&
        juzaData.data?.ayahs.map(({ text }: { text: string }, idx: number) => {
          return (
            <VerseCardChapter
              key={idx}
              arabic={text}
              english={"juzaEnglish.text"}
            />
          );
        })}
    </ChapterContainer>
  );
};

export default JuzaScreen;
