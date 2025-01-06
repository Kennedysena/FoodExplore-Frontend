import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 46.2rem;
  width: 30.4rem;
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

  > p {
    height: 25.6rem;
    width: 25.6rem;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    margin-top: 1.5rem;
    text-align: center;
  }

  > span {
    height: 5.2rem;
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

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > img {
    width: 17.6rem;
    cursor: pointer;
  }
`;

export const Title = styled(Link)`
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  display: flex;
  align-items: center;
  justify-content: center;

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 140%;
  }
  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Order = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.3rem;
`;

export const Button = styled.button`
  height: 4.8rem;
  width: 9.2rem;
  padding: 1.2rem 2.4rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
`;
