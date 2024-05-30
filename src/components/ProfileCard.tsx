import React from "react";
import styled from "styled-components";

interface ProfileCardProps {
  id: number;
  name: string;
  age: number;
  interests: string;
  university:string
}
const img = "https://via.placeholder.com/300x400";
const Card = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
`;

const ProfileInfo = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 10px;
`;

const ProfileCard = ({ name, age, interests,university }: ProfileCardProps) => {
  return (
    <Card style={{ backgroundImage: `url(${img})` }}>
      <ProfileInfo>
        <h2>
          {name}, {age}
        </h2>
        <h3>{university}</h3>
        <p>{interests}</p>
      </ProfileInfo>
    </Card>
  );
};

export default ProfileCard;
