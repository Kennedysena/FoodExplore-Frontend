import styled from "styled-components";

export const Container = styled.div`
  height: 46.2rem;
  width: 30.4rem;
  padding: 2.4rem 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > img {
    width: 17.6rem;
    height: 17.6rem;
  }

  > span {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    font-weight: bold;
    margin-top: 1.5rem;
  }

  > p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-top: 1.5rem;
  }

  > h4 {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 3rem;
    margin-top: 1.5rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    margin-top: 1.5rem;

    > svg {
      width: 2.4rem;
      height: 2.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > p {
      font-size: 2.5rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      font-weight: bold;
    }

    > button {
      height: 4.8rem;
      width: 9.2rem;
      padding: 1.2rem 2.4rem;
      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      border-radius: 0.5rem;
    }
  }
`;
