import styled from "styled-components";

export const Container = styled.button`
  height: 4.8rem;
  border-radius: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: medium; 
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;
  