import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-rows: 9.6rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    justify-self: center;

    > div {
      margin: 3.2rem 12.2rem 15.5rem;
    }

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
  }
    .price {
      display: flex;
      justify-content: initial;
      gap: 3.3rem;
      margin-top: 2.4rem;
      font-size: 2.3rem;
    }
  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4.7rem;
  margin-top: 4.2rem;

  > img {
    max-width: 39rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    text-align: left;

    h1 {
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-family: "Poppins", sans-serif;
      font-weight: 500;
      font-size: 4rem;
    }

    p {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2.4rem;
      font-family: "Poppins", sans-serif;
      font-weight: 300;
    }

    section {
      display: flex;
      justify-content: initial;
      align-items: center;
      gap: 1.2rem;
    }
  }
`;
