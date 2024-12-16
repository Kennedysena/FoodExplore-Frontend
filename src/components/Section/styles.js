import styled from "styled-components";

export const Container = styled.section`
  > h2 {
    height: 4.5rem;
    width: 112.2rem;
    margin-bottom: 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 400;
    font-size: 1.6rem;
    margin: 0 39rem 2.3rem;
  }

  > div {
    width: 112.2rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2.4rem;
    margin: 0 auto;
    border: 1px solid red;

    > button {
      width: 4rem;
      height: 4rem;
      background: none;
      border: none;
      font-size: 1.6rem;

      > svg {
        height: 4rem;
        width: 4rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    > *:not(button) {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 2.4rem;
      overflow: hidden;
    }
  }
`;
