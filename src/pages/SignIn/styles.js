import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  margin-inline: 13.1rem;
  flex-direction: row;
`;

export const Brand = styled.div`
 display: flex;
 justify-content: initial;

 > img {
    height: 4.8rem;
    width: 32.4rem;
 }
`

export const Form = styled.form`
  height: 54.0rem;
  width: 47.6rem;
  padding: 6.4rem;
  border-radius: 1.6rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;

  > h1 {
    font-size: 3.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    text-align: center;
  }
    
    a {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-family: "Poppins", sans-serif;
      text-align: center;
      font-weight: medium;
    }
`;


