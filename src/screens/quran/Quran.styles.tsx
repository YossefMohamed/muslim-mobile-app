import { FlatList } from "react-native";
import styled from "styled-components";

export const QuranList = styled(FlatList)`
  padding: ${(props) => props.theme.space[0]} ${(props) => props.theme.space[2]};
  margin: ${(props) => props.theme.space[2]} 0;
`;

export const CardContainer = styled.View`
  width: 100%;
  height: 200px;
  border-radius: 20px;
  overflow: hidden;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;
