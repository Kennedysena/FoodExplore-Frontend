import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-inline: 13.1rem;
`;

export const Form = styled.form`
  height: 66.1rem;
  width: 47.6rem;
  padding: 6.4rem;
  border-radius: 1.6rem;
  gap: 3.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-weight: 400;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    text-align: center;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    text-align: center;
    font-weight: medium;
  }
`;
