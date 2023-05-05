import { useNavigation } from "@react-navigation/native";
import { SafeArea } from "./safeArea";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../infrastructure/theme/colors";
import styled from "styled-components";

function LoginHeader() {
  return (
    <HeaderContainer>
      <IconContainer onPress={() => console.log("back")}>
        <Ionicons name={"arrow-back"} size={27} color={colors.brand.dark} />
      </IconContainer>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.View`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: transparent;
  min-height: 45px;
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[3]}
    ${(props) => props.theme.space[0]};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.tabs.primary};
  padding: 10px;
  border-radius: 1000px;
  margin: 0 ${(props) => props.theme.space[1]};
  elevation: 4;
`;

export default LoginHeader;
