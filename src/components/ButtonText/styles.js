import styled from "styled-components";

export const Container = styled.button`
  height: 4.8rem;
  border-radius: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: bold; 
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;
  