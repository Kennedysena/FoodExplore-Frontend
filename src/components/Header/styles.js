import styled from "styled-components";

export const Container = styled.header`
  height: 10.4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  display: flex;
  justify-content: space-between;
  padding: 2.4rem 12.3rem;
  gap: 3.2rem;
  margin-bottom: 16.4rem;

  > svg {
    height: 3rem;
    width: 19.7rem;
  }

  > input {
    height: 4.8rem;
    width: 58.1rem;
    padding: 1.6rem;
    text-align: center;
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
    border: none;
  }

  > svg {
    height: 2.4rem;
    width: 2.4rem;
  }
`;
export const PedidosButton = styled.button`
  height: 5.6rem;
  width: 21.6rem;
  padding: 1.2rem 3.2rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 0.5rem;
  font-weight: medium;
  font-size: 1.6rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    height: 3.2rem;
    width: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;
export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 19.7rem;
  }
`;
