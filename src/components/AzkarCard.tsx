import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import styled from "styled-components";
import { colors } from "../infrastructure/theme/colors";
import { Text } from "./typography";
type Props = {
  icon: string;
  onPress: () => void;
  title: string;
};
const AzkarCard: FC<Props> = ({ icon, title, onPress }) => {
  return (
    <CatContainer onPress={onPress}>
      <Ionicons name={icon} size={35} color={colors.brand.primary} />
      <Text variant="hint" style={{ textAlign: "center" }}>
        {title}
      </Text>
    </CatContainer>
  );
};

const CatContainer = styled.TouchableOpacity`
  width: 48%;
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[2]};
  margin: ${(props) => props.theme.space[2]} 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  elevation: 4;
`;

export default AzkarCard;
