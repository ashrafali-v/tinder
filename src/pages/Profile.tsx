import React, { useState,useEffect } from "react";
import styled from "styled-components";
import ProfileCard from "../components/ProfileCard";
import { useSwipeable } from "react-swipeable";
import {recommendMatches} from "../utilities/profile";

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const ProfileContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  background-color: #fff;
`;


const Profile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
     const getItems = async () => {
       const itemsData = await recommendMatches(); 
       setItems(itemsData);
       setLoading(false);
       console.log(itemsData);
       
     };

     getItems();
   }, []);
    const handleSwipeLeft = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handleSwipeRight = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + items.length) % items.length
      );
    };
    const handlers = useSwipeable({
      onSwipedLeft: handleSwipeLeft,
      onSwipedRight: handleSwipeRight,
      trackMouse: true,
    });

   if (loading) {
     return <div>Loading...</div>;
   }



  return (
    <SliderContainer>
      <ProfileContainer {...handlers}>
        <ProfileCard {...items[currentIndex]} />
      </ProfileContainer>
    </SliderContainer>
  );
};

export default Profile;
