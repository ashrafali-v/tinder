import React from "react";
import styled from "styled-components";

interface ProfileCardProps {
  name: string;
  age: number;
  bio: string;
  image: string;
}

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

const ProfileCard: React.FC<ProfileCardProps> = ({ name, age, bio, image }) => {
  return (
    <Card style={{ backgroundImage: `url(${image})` }}>
      <ProfileInfo>
        <h2>
          {name}, {age}
        </h2>
        <p>{bio}</p>
      </ProfileInfo>
    </Card>
  );
};

export default ProfileCard;
