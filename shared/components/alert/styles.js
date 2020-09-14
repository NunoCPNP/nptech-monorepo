import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  width: 100vw;
  background-color: green;
  z-index: 100;

  .text {
    color: white;
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }
`
