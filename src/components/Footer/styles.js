import styled from "styled-components";

export const Container = styled.footer`
  height: 7.7rem;
  width: 100%;
  padding: 2.4rem 12.3rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-weight: 400;
    font-size: 1.4rem;
  }
`;
