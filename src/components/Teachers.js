import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import profile1 from "../assests/profile1.jpeg";
import profile2 from "../assests/photo2.jpeg";
import profile3 from "../assests/profile3.webp";
import profile4 from "../assests/profile4.webp";

const teachers = [
  {
    image: profile1,
    name: "Anita Sharma",
    subjects: "Mathematics, Physics",
    qualification: "M.Sc. in Physics, B.Ed.",
    experience: "8 years of teaching experience in CBSE schools",
  },
  {
    image: profile2,
    name: "Rohit Verma",
    subjects: "English Literature, Grammar",
    qualification: "M.A. in English, B.Ed.",
    experience: "6 years of teaching experience in high schools",
  },
  {
    image: profile3,
    name: "Pooja Mehta",
    subjects: "Biology, Chemistry",
    qualification: "M.Sc. in Biology, B.Ed.",
    experience: "10 years of teaching experience in ICSE schools",
  },
  {
    image: profile4,
    name: "Amit Khanna",
    subjects: "History, Geography",
    qualification: "M.A. in History, B.Ed.",
    experience: "7 years of experience in competitive exam coaching",
  },
];

const Wrapper = styled.div`
  background: white;
  padding: 0px;
  text-align: center;
  margin-inline: 25px;
  padding-bottom: 40px;
`;

const Heading = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #066F2D;
  margin-bottom: 20px;

 @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const SubText = styled.p`
  color: #444;
  max-width: 700px;
  margin: 0 auto 40px;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SliderWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;

  @media (max-width: 1200px) {
    max-width: 650px;
  }

   @media (max-width: 768px) {
    max-width: 260px;
  }

  @media (max-width: 360px) {
    max-width: 240px;
  }

`;

const Card = styled.div`
  max-width: 300px;
  width: 90%;
  border: 1px solid #333;
  border-radius: 12px;
  padding: 30px 20px;
  margin: auto;
  height: 100%;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  background-color: white;
  transition: all 0.3s ease;

 @media (max-width: 1200px) {
    max-width: 260px;
  }

  @media (max-width: 768px) {
    max-width: 200px;
  }

   @media (max-width: 360px) {
    max-width: 180px;
  }
`;

const ProfileImage = styled.img`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #333;
  margin-bottom: 15px;
`;

const Name = styled.h3`
  font-size: 1.3rem;
  color: #066F2D;
  margin-bottom: 5px;
`;

const Subject = styled.p`
  color: #666;
  font-style: italic;
  margin-bottom: 10px;
`;

const Detail = styled.p`
  font-size: 0.95rem;
  color: #333;
  margin: 4px 0;
  text-align: center;
`;

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  font-size: 1.5rem;
  color: #066F2D;
  cursor: pointer;
`;

const PrevArrow = styled(Arrow)`
  left: -35px;
`;

const NextArrow = styled(Arrow)`
  right: -35px;
`;

const CustomPrevArrow = ({ onClick }) => (
  <PrevArrow onClick={onClick}>
    <FaArrowLeft />
  </PrevArrow>
);

const CustomNextArrow = ({ onClick }) => (
  <NextArrow onClick={onClick}>
    <FaArrowRight />
  </NextArrow>
);

const Teaches = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Heading>Meet Our Expert Teachers</Heading>
      <SubText>
        Our experienced faculty is dedicated to delivering high-quality education across subjects.
        Get to know the brilliant minds who will be guiding your learning journey.
      </SubText>

      <SliderWrapper>
        <Slider {...settings}>
          {teachers.map((teacher, index) => (
            <Card key={index}>
              <ProfileImage src={teacher.image} alt={teacher.name} />
              <Name>{teacher.name}</Name>
              <Subject>{teacher.subjects}</Subject>
              <Detail>{teacher.qualification}</Detail>
              <Detail>{teacher.experience}</Detail>
            </Card>
          ))}
        </Slider>
      </SliderWrapper>
    </Wrapper>
  );
};

export default Teaches;
