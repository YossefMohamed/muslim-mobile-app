import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Card from "../../components/Card";
import CustomButton from "../../components/CustomButton";
import { Text } from "../../components/typography";
import VerseCardChapter from "../../components/VerseCardChapter";
import Quran from "../../endpoints/quranEndpoints";
import { TafseerContainer } from "./Verse.styles";

const VerseScreen = ({ navigation, route }: any) => {
  const { number, arText, enText } = route.params;

  const [data, setData] = React.useState<any>([]);
  React.useState(() => {
    axios(`https://api.alquran.cloud/v1/ayah/${number}/ar.qurtubi`).then(
      ({ data }) => {
        setData(data);
      }
    );
  }, [number, arText, enText]);
  console.log(data.code);
  return (
    <TafseerContainer>
      {!data.code ? (
        <Text variant="caption">Loading...</Text>
      ) : (
        <>
          <VerseCardChapter arabic={arText} english={enText} tafseer />

          <VerseCardChapter arabic={data.data.text} english={""} tafseer />
          <CustomButton
            text="الرجوع للقراءة"
            onPress={() => navigation.goBack()}
          />
        </>
      )}
    </TafseerContainer>
  );
};

export default VerseScreen;
