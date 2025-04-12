import React from "react";
import styled from "styled-components";
import ScienceIcon from "@mui/icons-material/Science";
import FunctionsIcon from "@mui/icons-material/Functions";
import BiotechIcon from "@mui/icons-material/Biotech";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import BusinessIcon from "@mui/icons-material/BusinessCenter";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import LanguageIcon from "@mui/icons-material/Language";
import BarChartIcon from "@mui/icons-material/BarChart";
import Lottie from "lottie-react";
import animationData from "../assests/Animation - 1744354582020.json";

const Container = styled.div`
  background-color: white;
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  color: #222;

  @media (max-width: 480px) {
    padding: 2rem 0rem;
  }
`;

const Wrapper = styled.div`
  max-width: 1150px;
  width: 100%;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  color: #066f2d;
  margin-bottom: 2rem;

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 20px;
`;

const Item = styled.div`
  background: #f4f4f4;
  border-radius: 16px;
  padding: 1.5rem 1rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 160px;
  flex: 1 1 160px;
  border: 1px solid rgb(200, 200, 200);

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex: 1 1 120px;
    max-width: 120px;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    flex: 1 1 90px;
    max-width: 90px;
    padding: 1rem;
  }
`;

const Icon = styled.div`
  font-size: 48px;
  color: #066f2d;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 36px;
  }
`;

const Label = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333843;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Divider = styled.hr`
  margin: 3rem auto;
  width: 80px;
  border: 2px solid #066f2d;
  border-radius: 100px;
`;

const FlexSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-inline: 25px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const TextContent = styled.div`
  flex: 1;
  text-align: left;
  max-width: 600px;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #044e1f;
    margin-bottom: 1rem;

    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 18px;
    color: #444;
    margin-bottom: 2rem;
    line-height: 1.6;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

const ExamList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const ExamBadge = styled.div`
  background-color: #e0f2e9;
  color: #066f2d;
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  font-size: 16px;
  border-radius: 30px;
  border: 2px solid #c6e8d5;
  transition: 0.3s ease;

  &:hover {
    background-color: #c6e8d5;
    color: #044e1f;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 0.5rem 1rem;
  }
`;

const LottieWrapper = styled.div`
  flex: 1;
  max-width: 500px;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;
const Information = () => {
  return (
    <Container>
      <Wrapper>
        <SectionTitle>Subjects We Cover</SectionTitle>

        <Grid>
          <Item>
            <Icon>
              <EmojiObjectsIcon fontSize="inherit" />
            </Icon>
            <Label>Physics</Label>
          </Item>
          <Item>
            <Icon>
              <ScienceIcon fontSize="inherit" />
            </Icon>
            <Label>Chemistry</Label>
          </Item>
          <Item>
            <Icon>
              <FunctionsIcon fontSize="inherit" />
            </Icon>
            <Label>Mathematics</Label>
          </Item>
          <Item>
            <Icon>
              <BiotechIcon fontSize="inherit" />
            </Icon>
            <Label>Biology</Label>
          </Item>
          <Item>
            <Icon>
              <AgricultureIcon fontSize="inherit" />
            </Icon>
            <Label>Agriculture</Label>
          </Item>
          <Item>
            <Icon>
              <BusinessIcon fontSize="inherit" />
            </Icon>
            <Label>Commerce</Label>
          </Item>
          <Item>
            <Icon>
              <BarChartIcon fontSize="inherit" />
            </Icon>
            <Label>Economics</Label>
          </Item>
          <Item>
            <Icon>
              <LanguageIcon fontSize="inherit" />
            </Icon>
            <Label>English</Label>
          </Item>
        </Grid>

        <Divider />

        <FlexSection>
          <TextContent>
            <h3>Your Path to Success in Competitive Exams Begins Here</h3>
            <p>
              We offer basic preparation for all major competitive exams,
              focusing on strengthening your fundamentals and building
              confidence. With clear explanations, interactive learning, and
              consistent support, we guide you step-by-step toward success.
            </p>
            <ExamList>
              {[
                "Board",
                "NEET",
                "JEE",
                "ICAR",
                "NDA",
                "VLDA",
                "HAU",
                "KVPY",
                "B.Sc Agriculture",
              ].map((exam, index) => (
                <ExamBadge key={index}>{exam}</ExamBadge>
              ))}
            </ExamList>
          </TextContent>

          <LottieWrapper>
            <Lottie animationData={animationData} loop={true} />
          </LottieWrapper>
        </FlexSection>
      </Wrapper>
    </Container>
  );
};

export default Information;
