import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  > input {
    height: 5.5rem;
    width: 100%;
    padding: 1.2rem 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;
  }

  > img {
    margin: 0 2rem 0 0;
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    margin: 0 2rem 0rem 0;
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
