import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  button {
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  
    svg,
    span {
      font-weight: 700;
      font-size: 2rem;
      line-height: 160%;
    }
`; 