import styled from "styled-components";
import { Text } from "../../components/typography";

export const CardContainer = styled.View`
  margin: ${(props) => props.theme.space[3]} 0;
  height: 175px;
  display: flex;

  justify-content: space-between;
`;

export const TextCenter = styled(Text)`
  text-align: center;
  margin: ${(props) => props.theme.sizes[0]} 0;
`;
