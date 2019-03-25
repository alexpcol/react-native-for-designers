import React from "react";
import styled from "styled-components";

const SecondCard = props => (
  <Container>
    <Cover>
      <Image source={props.coverImage} />
      <Logo resizeMode="contain" source={props.logo} />
      <CoverWrappers>
        <CoverSubtitle>{props.coverSubtitle}</CoverSubtitle>
        <CoverTitle>{props.coverTitle}</CoverTitle>
      </CoverWrappers>
    </Cover>
    <Content>
      <Icon source={props.icon} />
      <ContentWrappers>
        <ContentTitle>{props.contentTitle}</ContentTitle>
        <ContentSubtitle>{props.contentSubtitle}</ContentSubtitle>
      </ContentWrappers>
    </Content>
  </Container>
);

export default SecondCard;

// ---------    UIComponnets    -----------

// ---------    ViewComponents  -----------
const Container = styled.View`
  background: white;
  width: 335px;
  height: 335px;
  border-radius: 14px;
  margin-left: 20px;
  margin-bottom: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
  width: 100%;
  height: 85%;
  border-radius: 14px;
  overflow: hidden;
`;
const Content = styled.View`
  background: white;
  width: 100%;
  height: 70px;
  padding-left: 20px;
  padding-right: 20px;
  flex-direction: row;
  align-items: center;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  position: absolute;
  bottom: 0;
`;

const CoverWrappers = styled.View`
  margin-left: 10px;
  margin-bottom: 18px;
  padding-bottom: 8px;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const ContentWrappers = styled.View`
  margin-left: 5px;
  padding: 8px;
`;

// ---------    ImageComponents  -----------

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  position: absolute;
  top: 70px;
  left: 50%;
  margin-left: -24px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Icon = styled.Image`
  width: 32px;
  height: 32px;
  background: black;
  border-radius: 16px;
`;
// ---------    LabelComponents  -----------
const CoverSubtitle = styled.Text`
  color: #c5c8cc;
  font-size: 15px;
  font-weight: 500;
`;
const CoverTitle = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-top: 8px;
`;
const ContentTitle = styled.Text`
  color: #3c4560;
  font-size: 14px;
  font-weight: 500;
`;
const ContentSubtitle = styled.Text`
  color: #b8bece;
  font-size: 12px;
  font-weight: 500;
`;
