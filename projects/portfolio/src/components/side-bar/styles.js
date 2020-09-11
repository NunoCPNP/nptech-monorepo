import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled(motion.nav)`
  position: fixed;
  z-index: 80;
  top: 0;
  right: 0;
  width: 35rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.sideBar};

  .navbar-items {
    ul {
      margin-top: 7rem;
      margin-right: 10rem;
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }

    li {
      margin-bottom: 1.5rem;
      text-align: center;
    }

    li:last-child {
      margin-top: 2rem;
    }

    a {
      text-transform: uppercase;
      font-size: 1.5rem;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.sideBarText};
    }

    .extra {
      background-color: ${({ theme }) => theme.colors.extraBBackground};
      color: ${({ theme }) => theme.colors.extraText};
      border-radius: 1rem;
      padding: 0.1rem 1.3rem;
    }
  }
`
