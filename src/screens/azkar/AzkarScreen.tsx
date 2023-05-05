import axios from "axios";
import React from "react";
import { ScrollView, View } from "react-native";
import { useQuery } from "react-query";
import AzkarCard from "../../components/AzkarCard";
import CatCard from "../../components/CatCard";
import { Text } from "../../components/typography";
import { AzkarListContainer } from "./Azkar.styles";

const AzkarScreen = ({ navigation }: any) => {
  const {
    data: azkarList,
    isLoading: azkarListLoading,
    error,
  }: any = useQuery(["azkar"], async () => {
    const data = await axios.get(
      "https://www.hisnmuslim.com/api/ar/husn_ar.json"
    );
    return data.data["العربية"];
  });

  return (
    <>
      {!azkarListLoading && (
        <AzkarListContainer
          numColumns={2}
          data={azkarList}
          renderItem={({ item }: any, idx: number) => {
            return (
              <AzkarCard
                title={item["TITLE"]}
                icon="book-outline"
                onPress={() => {
                  navigation.navigate("SingleAzkarScreen", {
                    title: item["TITLE"],
                    url: item["TEXT"],
                  });
                }}
              ></AzkarCard>
            );
          }}
          keyExtractor={(item: any, index: number) => `${index} + ${item}`}
        />
      )}
    </>
  );
};

export default AzkarScreen;
