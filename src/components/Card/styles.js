import styled from "styled-components";

export const Container = styled.div`
  height: 46.2rem;
  width: 30.2rem;
  padding: 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border: 1px solid ${({ theme }) => theme.COLORS.DARK_300};
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  svg {
    cursor: pointer;
  }

  > svg {
    width: 2.4rem;
    height: 2.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
  }

  > img {
    width: 17.6rem;
    cursor: pointer;
  }

  > p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-top: 1.5rem;
  }

  > span {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    font-size: 3.2rem;
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
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 140%;
  }
`;

export const Order = styled.div`
  width: fit-content;
  flex-direction: row;

  > button {
    padding: 1.2rem 2.4rem;
  }
`;
