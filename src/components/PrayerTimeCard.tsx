import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components";
import { colors } from "../infrastructure/theme/colors";
import { Text } from "./typography";

const PrayerTimeCard = ({
  selected = false,
  salah,
  time,
}: {
  selected?: boolean;
  salah: string;
  time: string;
}) => {
  return (
    <CardContainer selected={selected}>
      <Text variant="label" color={selected ? colors.text.inverse : "black"}>
        {salah}
      </Text>
      <Text variant="label" color={selected ? colors.text.inverse : "black"}>
        {time}
      </Text>
      <Text variant="label" color={selected ? colors.text.inverse : "black"}>
        <Ionicons name="notifications-outline" size={24} />
      </Text>
    </CardContainer>
  );
};

const CardContainer = styled.View<{
  selected: boolean;
}>`
  display: flex;
  flex-direction: row;
  elevation: 4;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => props.theme.sizes[1]};
  margin: ${(props) => props.theme.sizes[0]} 0;
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.brand.primary
      : props.theme.colors.bg.primary};
  border-radius: 5px;
`;
export default PrayerTimeCard;
