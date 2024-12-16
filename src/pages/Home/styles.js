import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */

  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  > main {
    grid-area: content;
    justify-self: center;

    > div {
      width: 114.9rem;
      margin: 16.4rem 12.4rem 0rem 12.4rem;

      header {
        height: 26rem;
        margin-inline: 1.2rem 1.6rem;

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        background: linear-gradient(
          180deg,
          ${({ theme }) => theme.COLORS.GRADIENT_100} 0%,
          ${({ theme }) => theme.COLORS.GRADIENT_200} 100%
        );
        border-radius: 0.3rem;

        position: relative;

        img {
          position: absolute;
          top: -13.8rem;
          left: -7rem;
          bottom: 0;
        }

        div {
          height: 8rem;
          width: 42.1rem;
          margin: 8.8rem 10.1rem 1.2rem 9.2rem;

          color: ${({ theme }) => theme.COLORS.LIGHT_100};

          h1 {
            font-family: "Poppins", sans-serif;
            font-weight: 500;
            font-size: 4rem;

            margin-bottom: 0.8rem;
          }

          p {
            font-size: 1.6rem;
            line-height: 140%;
          }
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-top: 6.2rem;

  section > h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin-bottom: 2.4rem;
  }



 
    gap: 4.8rem;

    section > h2 {
      font-size: 3.2rem;
    }

    swiper-container {
      height: 46.2rem;
    }

    swiper-container::before,
    swiper-container::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 22.4rem;
      z-index: 2;
      pointer-events: none;
    }

    swiper-container::before {
      left: 0;
      background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, transparent 100%);
    }

    swiper-container::after {
      right: 0;
      background: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 1) 100%);
    }

    swiper-slide {
      max-width: 30.4rem;
    }
  
`;
