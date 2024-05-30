import React, { useState } from "react";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCard";
import { useSwipeable } from "react-swipeable";
import StyledButton from "../components/StyledButton";

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

const Profile = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
      <StyledButton
        onClick={handleBack}
        label={"Back"}
        disabled={currentIndex === 0}
      />
      <ProfileCard {...profiles[currentIndex]} />
      <StyledButton
        onClick={handleNext}
        label={"Next"}
        disabled={currentIndex === profiles.length - 1}
      />
    </Container>
  );
};

export default Profile;
