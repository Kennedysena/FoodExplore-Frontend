import styled from "styled-components";


export const Container = styled.span`
  height: 3.2rem;
  width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  font-family: "Poppins", sans-serif;
  padding: 0.8rem .4rem;
  font-size: 1.2rem;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 500;
`;
