import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  background-color: #066F2D;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem 5rem 1rem;

   @media (max-width: 900px) {
    padding: 2rem 1rem 5rem 1rem;
  }

  @media (max-width: 900px) {
    padding: 2rem 1rem 5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem 3.5rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 900px;
  padding: 0 1rem;
`;

const Choose = styled.span`
  color: white; 
  font-weight: 600;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const HightLightBig = styled.span`
  color: #FFC107; 
  font-weight: 600;
  font-size: 60px;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const Dream = styled.div`
  font-weight: 500;
  font-size: 40px;
  margin-top: 1rem;
  margin-bottom: 4.5rem;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin-bottom: 0rem;
  }
`;

const Info = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 1.7;  // Increased line height
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 1.6;
    margin-top: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    line-height: 1.5;
    margin-top: 1rem;
  }
`;


const Highlight = styled.span`
  color: #FFC107; 
  font-weight: 500;
`;

const Home = () => {
  return (
    <Container>
      <ContentWrapper>
        <div>
          <Choose>Choose Excellence. Choose </Choose>
          <HightLightBig>G-SQUARE</HightLightBig>
        </div>

        <Dream>Your Dream. Our Mission.</Dream>

        <Info>
          Empowering students from <Highlight>Class 8th to 12th (CBSE & HBSE)</Highlight> with strong{' '}
          <Highlight>Foundation</Highlight> & <Highlight>Advanced Courses</Highlight>.
        </Info>

        <Info>
          Join the journey to success and learn how to crack{' '}
          <Highlight>NEET</Highlight> | <Highlight>JEE</Highlight> | <Highlight>AIIMS</Highlight>{' '}
          with expert guidance.
        </Info>
      </ContentWrapper>
    </Container>
  );
};

export default Home;
