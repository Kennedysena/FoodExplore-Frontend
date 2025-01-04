import styled from "styled-components";

export const Container = styled.section`
  > h2 {
    margin-bottom: ${({ marginBottom }) => marginBottom || "1.6rem"};

    color: ${({ theme }) => theme.COLORS.LIGHT_300 || theme.COLORS.LIGHT_400};
    font-weight: 400;
    font-size: 1.6rem;
  }
`;
