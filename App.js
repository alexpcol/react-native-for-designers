import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import { Icon } from "expo";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <SafeAreaView>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <TitleBar>
              <Avatar source={require("./assets/avatar.jpg")} />
              <Title>Welcome back</Title>
              <Name>Alex</Name>
              <SideIcon>
                <NotificationIcon />
              </SideIcon>
            </TitleBar>
            <LogosScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={false}
            >
              <Logo
                image={require("./assets/logo-framerx.png")}
                text="Frame-X"
              />
              <Logo image={require("./assets/logo-figma.png")} text="Figma" />
              <Logo image={require("./assets/logo-swift.png")} text="Swift" />
            </LogosScrollView>
            <Subtitle>{"Continue Learning".toUpperCase()}</Subtitle>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              style={{ paddingBottom: 30 }}
            >
              <Card
                title="Styled Components"
                coverImage={require("./assets/background2.jpg")}
                caption="React Native"
                logo={require("./assets/logo-react.png")}
                subtitle={"5 of 12 sections".toUpperCase()}
              />
              <Card
                title="Styled Components 2"
                coverImage={require("./assets/background1.jpg")}
                caption="React Native"
                logo={require("./assets/logo-react.png")}
                subtitle={"5 of 12 sections".toUpperCase()}
              />
            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </Container>
    );
  }
}

// ---------    UIComponnets    -----------

// ---------    ViewComponents  -----------
const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const SideIcon = styled.View`
  position: absolute;
  right: 20;
  top: 5;
`;

const LogosScrollView = styled.ScrollView`
  flex-direction: row;
  padding: 20px;
  padding-left: 12px;
`;

// ---------    LabelsComponents  -----------
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 50px;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
// ---------    ImageComponents  -----------
const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;
