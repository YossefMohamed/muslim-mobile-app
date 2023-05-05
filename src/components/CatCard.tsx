import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import styled from "styled-components";
import { Text } from "./typography";
type Props = {
  icon: string;
  onPress: () => void;
  title: string;
};
const CatCard: FC<Props> = ({ icon, title, onPress }) => {
  return (
    <CatContainer onPress={onPress}>
      <Ionicons name={icon} size={35} color="black" />
      <Text variant="caption">{title}</Text>
    </CatContainer>
  );
};

const CatContainer = styled.TouchableOpacity`
  width: 24%;
  padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[2]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  elevation: 4;
`;

export default CatCard;
