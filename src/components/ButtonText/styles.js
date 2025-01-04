import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;

  font-family: "Poppins", sans-serif;
  font-weight: medium; 
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;
 