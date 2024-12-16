import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;

  > input {
    height: 5.5rem;
    text-align: center;

    padding: 1.2rem 1.4rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;
