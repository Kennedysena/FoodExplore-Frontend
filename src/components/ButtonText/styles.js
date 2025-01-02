import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;

  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  display: flex;
  align-items: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
`;
