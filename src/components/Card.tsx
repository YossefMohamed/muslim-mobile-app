import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  image?: string;

  children: JSX.Element;
};

const Card: FC<Props> = ({ image, children }) => {
  return (
    <CardContainer>
      {image && <ImageContainer source={image} resizeMode="cover" />}
      {<Overlay></Overlay>}
      {children}
    </CardContainer>
  );
};
const Overlay = styled.View`
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0.4;
`;
const CardContainer = styled.View`
  z-index: 99999;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const ImageContainer = styled.Image`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`;
export default Card;
