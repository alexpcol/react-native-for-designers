import React from "react";
import styled from "styled-components";

const Card = props => (
  <Container>
    <Cover>
      <Image source={props.coverImage} />
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Logo source={props.logo} />
      <Wrapper>
        <Caption>{props.caption}</Caption>
        <Subtitle>{props.subtitle}</Subtitle>
      </Wrapper>
    </Content>
  </Container>
);

export default Card;
// ---------    UIComponnets    -----------

// ---------    ViewComponents  -----------
const Container = styled.View`
  background: white;
  width: 315px;
  height: 280px;
  border-radius: 14px;
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  overflow: hidden;
`;
const Content = styled.View`
  background: white;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 80px;
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
`;

const Wrapper = styled.View`
  margin-left: 10px;
`;
// ---------    ImageComponents  -----------
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;
// ---------    TextComponents  -----------
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 100%;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;
const Subtitle = styled.Text`
  color: #3c4560;
  font-weight: 600;
  font-size: 15px;
  margin-top: 4px;
`;
