import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";
import SecondCard from "./components/SecondCard";
import { NotificationIcon } from "./components/Icons";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Menu />
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
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
              {logos.map((logo, index) => (
                <Logo key={index} image={logo.image} text={logo.text} />
              ))}
            </LogosScrollView>
            <Subtitle>{"Continue Learning".toUpperCase()}</Subtitle>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              style={{ paddingBottom: 30 }}
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  coverImage={card.coverImage}
                  caption={card.caption}
                  logo={card.logo}
                  subtitle={card.subtitle}
                />
              ))}
            </ScrollView>
            <Subtitle style={{ marginBottom: 20 }}>
              {"Popular Courses".toUpperCase()}
            </Subtitle>
            {courses.map((course, index) => (
              <SecondCard
                key={index}
                coverImage={course.coverImage}
                logo={course.logo}
                coverSubtitle={course.coverSubtitle}
                coverTitle={course.coverTitle}
                icon={course.icon}
                contentTitle={course.contentTitle}
                contentSubtitle={course.contentSubtitle}
              />
            ))}
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
  margin-top: 20px;
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

// ---------    Code?  -----------

const logos = [
  {
    image: require("./assets/logo-framerx.png"),
    text: "Frame-X"
  },
  {
    image: require("./assets/logo-figma.png"),
    text: "Figma"
  },
  {
    image: require("./assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("./assets/logo-studio.png"),
    text: "Studio"
  },
  {
    image: require("./assets/logo-swift.png"),
    text: "Swift"
  },
  {
    image: require("./assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("./assets/logo-sketch.png"),
    text: "Sketch"
  }
];
const cards = [
  {
    title: "React Native\nfor Designers",
    coverImage: require("./assets/background11.jpg"),
    caption: "React Native",
    logo: require("./assets/logo-react.png"),
    subtitle: "1 of 12 sections".toUpperCase()
  },
  {
    title: "Styled\nComponents",
    coverImage: require("./assets/background12.jpg"),
    caption: "React Native",
    logo: require("./assets/logo-react.png"),
    subtitle: "2 of 12 sections".toUpperCase()
  },
  {
    title: "Props and Icons",
    coverImage: require("./assets/background13.jpg"),
    caption: "React Native",
    logo: require("./assets/logo-react.png"),
    subtitle: "3 of 12 sections".toUpperCase()
  },
  {
    title: "Static Data\nand Loop",
    coverImage: require("./assets/background14.jpg"),
    caption: "React Native",
    logo: require("./assets/logo-react.png"),
    subtitle: "4 of 12 sections".toUpperCase()
  }
];
const courses = [
  {
    coverTitle: "Prototype in InVision Studio",
    coverSubtitle: "10 sections",
    coverImage: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    contentSubtitle: "Meng To",
    icon: require("./assets/avatar.jpg"),
    contentTitle: "Design and interactive prototype"
  },
  {
    coverTitle: "React for Designers",
    coverSubtitle: "12 sections",
    coverImage: require("./assets/background11.jpg"),
    logo: require("./assets/logo-react.png"),
    contentSubtitle: "Meng To",
    icon: require("./assets/avatar.jpg"),
    contentTitle: "Learn to design and code a React site"
  },
  {
    coverTitle: "Design and Code with Framer X",
    coverSubtitle: "10 sections",
    coverImage: require("./assets/background14.jpg"),
    logo: require("./assets/logo-framerx.png"),
    contentSubtitle: "Meng To",
    icon: require("./assets/avatar.jpg"),
    contentTitle: "Create powerful design and code components for your app"
  },
  {
    coverTitle: "Design System in Figma",
    coverSubtitle: "10 sections",
    coverImage: require("./assets/background6.jpg"),
    logo: require("./assets/logo-figma.png"),
    contentSubtitle: "Meng To",
    icon: require("./assets/avatar.jpg"),
    contentTitle:
      "Complete guide to designing a site using a collaborative design tool"
  }
];
/* <SecondCard
              coverImage={require("./assets/background1.jpg")}
              coverSubtitle="hehe"
              coverTitle="Hoho"
              icon={require("./assets/avatar.jpg")}
              contentTitle="lol"
              contentSubtitle="Sunflower"
            />*/
