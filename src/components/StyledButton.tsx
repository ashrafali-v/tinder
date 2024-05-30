import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  disabled:boolean
}

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

const StyledButton = ({ onClick, label, disabled }: ButtonProps) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {label}
    </Button>
  );
};

export default StyledButton;
