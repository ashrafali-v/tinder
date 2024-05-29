import React, { useState } from "react";
import styled from "styled-components";
import ProfileCard from "./ProfileCard";
import { useSwipeable } from "react-swipeable";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const profiles = [
  {
    name: "Alice",
    age: 25,
    bio: "Loves hiking and outdoor activities.",
    image: "https://via.placeholder.com/300x400",
  },
  {
    name: "Bob",
    age: 30,
    bio: "Tech enthusiast and coffee lover.",
    image: "https://via.placeholder.com/300x400",
  },
  {
    name: "Charlie",
    age: 28,
    bio: "Enjoys reading and playing the piano.",
    image: "https://via.placeholder.com/300x400",
  },
];

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Profile: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      if (currentIndex < profiles.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    const handleBack = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };

  return (
    <Container>
      <Button onClick={handleBack} disabled={currentIndex === 0}>
        Back
      </Button>
      <ProfileCard {...profiles[currentIndex]} />
      <Button
        onClick={handleNext}
        disabled={currentIndex === profiles.length - 1}
      >
        Next
      </Button>
    </Container>
  );
};

export default Profile;
