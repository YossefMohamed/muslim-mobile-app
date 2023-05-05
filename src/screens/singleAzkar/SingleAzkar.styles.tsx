import styled from "styled-components";

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  margin: ${(props) => props.theme.space[2]} 0;
  flex: 1;
`;

export const Row = styled.View`
  margin-top: auto;
  margin: ${(props) => props.theme.space[1]} 0;
`;
