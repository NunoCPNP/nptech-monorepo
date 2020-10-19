import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);

  img {
    grid-column: 1 / 9;
    grid-row: 1 / 13;

    @media only screen and (max-width: 1312px) {
      grid-column: 1 / 10;
    }

    @media only screen and (max-width: 992px) {
      grid-column: 1 / 11;
    }

    @media only screen and (max-width: 768px) {
      grid-column: 1 / 12;
      grid-row: 1 / 11;
    }

    @media only screen and (max-width: 688px) {
      grid-column: 1 / 13;
      grid-row: 1 / 10;
    }
  }
`

export const CTAText = styled(motion.div)`
  grid-row: 5 / 12;
  grid-column: 6 / 13;
  align-self: center;
  text-align: right;
  color: ${({ theme }) => theme.colors.white};
  padding-right: 3rem;

  h2 {
    font-size: 2rem;

    span {
      color: ${({ theme }) => theme.colors.highlight};
      font-size: 7rem;
      font-weight: 700;
      padding-left: 1rem;
    }
  }

  h3 {
    font-size: 3rem;

    span {
      font-size: 2.5rem;
    }
  }

  @media only screen and (max-width: 992px) {
    grid-row: 8 / 13;
    grid-column: 3 / 13;
  }

  @media only screen and (max-width: 768px) {
    grid-row: 9 / 13;

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 2.5rem;

      span {
        font-size: 2rem;
      }
    }
  }

  @media only screen and (max-width: 688px) {
    grid-column: 1 / 13;
    text-align: center;
    padding: 0;

    h2 {
      font-size: 1.5rem;

      span {
        font-size: 5.5rem;
      }
    }

    h3 {
      font-size: 2rem;

      span {
        font-size: 1.5rem;
      }
    }
  }
`

export const ButtonsContainer = styled.div`
  padding-top: 1.5rem;
`
