import React from "react";
import styled from "styled-components";
import studyChild from "../assests/color1.png";
import plan from "../assests/color2.png";
import calender from "../assests/calendar.png";
import teacher from "../assests/teacher.png";
import rising from "../assests/rising.png";
import strategy from "../assests/strategy.png";
import training from "../assests/training.png";
import question from "../assests/question.png";

const FeatureSection = styled.div`
  background-color: #f9f9f9;
  padding: 5rem 1rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #222;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem 0rem;

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const FeatureItem = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-inline: 20px;

  @media (max-width: 480px) {
    padding: 1rem;
    margin-inline: 10px;
    gap: 0.8rem;
  }
`;

const IconBox = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;

  img,
  svg {
    width: 100%;
    height: 100%;
    object-fit: contain;
    color: #555;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const FeatureText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Feature = () => {
  return (
    <FeatureSection>
      <Wrapper>
        <SectionTitle>Why Choose Us?</SectionTitle>
        <Grid>
          <FeatureItem>
            <IconBox>
              <img src={teacher} alt="teacher" />
            </IconBox>
            <FeatureText>
              Expert Faculty with Years of Teaching Experience
            </FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconBox>
              <img src={plan} alt="Plan" />
            </IconBox>
            <FeatureText>Best Educational Plans for Every Learner</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconBox>
              <img src={training} alt="Training" />
            </IconBox>
            <FeatureText>Interactive and Engaging Lessons</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconBox>
              <img src={strategy} alt="Strategy" />
            </IconBox>
            <FeatureText>Daily Homework and Learning Tasks</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconBox>
              <img src={rising} alt="Progress" />
            </IconBox>
            <FeatureText>Regular Tests and Progress Analysis</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconBox>
              <img src={question} alt="Doubt" />
            </IconBox>
            <FeatureText>Doubt Solving Sessions</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconBox>
              <img src={studyChild} alt="Attention" />
            </IconBox>
            <FeatureText>Personalized Attention to Every Student</FeatureText>
          </FeatureItem>
          <FeatureItem>
            <IconBox>
              <img src={calender} alt="Calendar" />
            </IconBox>
            <FeatureText>3 Days Free Demo Classes</FeatureText>
          </FeatureItem>
        </Grid>
      </Wrapper>
    </FeatureSection>
  );
};

export default Feature;
