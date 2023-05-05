import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../infrastructure/theme/colors";
import { Text } from "./typography";

const MultiSelect = ({
  selected,
  useSelected,
}: {
  selected: string;
  useSelected: (selected: string) => void;
}) => {
  return (
    <ItemContainer>
      <Item
        onPress={() => useSelected("surah")}
        selected={selected === "surah"}
      >
        <Text
          variant="caption"
          color={selected === "surah" ? "white" : colors.text.primary}
        >
          Surah
        </Text>
      </Item>

      <Item onPress={() => useSelected("juza")} selected={selected === "juza"}>
        <Text
          variant="caption"
          color={selected === "juza" ? "white" : colors.text.primary}
        >
          Juza`
        </Text>
      </Item>

      <Item onPress={() => useSelected("more")} selected={selected === "more"}>
        <Text
          variant="caption"
          color={selected === "more" ? "white" : colors.text.primary}
        >
          More
        </Text>
      </Item>
    </ItemContainer>
  );
};

const ItemContainer = styled.View`
  display: flex;
  flex-direction: row;
  border-radius: 30px;
  elevation: 4;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const Item = styled.TouchableOpacity<{ selected: boolean }>`
  width: 33.3%;
  align-items: center;
  border-radius: 15px;
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.brand.primary
      : props.theme.colors.bg.primary};
  justify-content: center;
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[3]};
`;
export default MultiSelect;
