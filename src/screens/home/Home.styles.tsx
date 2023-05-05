import styled from "styled-components";

export const LocationContainer = styled.View`
  display: flex;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const CardContainer = styled.View`
  margin: ${(props) => props.theme.space[3]} 0;
  width: 49%;
  height: 250px;
  display: flex;

  justify-content: space-between;
`;

export const SecCardContainer = styled.View`
  flex: 1;
  margin-bottom: 10px;
`;
export const ThirdCardContainer = styled.View`
  height: 40%;
`;
export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderRow = styled.View`
  display: flex;
  flex-direction: row;
  elevation: 4;
  border-radius: 10px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[3]};
`;

export const UserContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  margin: ${(props) => props.theme.space[2]} 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
