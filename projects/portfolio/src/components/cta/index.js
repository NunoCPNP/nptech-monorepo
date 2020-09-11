import { motion } from 'framer-motion'
import { useControllersState } from '../../context/controllers'
import { ButtonsContainer, CTAText, Wrapper } from './styles'

import AnchorButton from '../anchor-button'

const imageAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
    },
  },
}

const textAnimation = {
  hidden: { x: +500 },
  visible: {
    x: 0,
    transition: {
      delay: 2,
    },
  },
}

const CTA = () => {
  const { data } = useControllersState()

  return (
    <Wrapper data-testid="cta-component">
      <motion.img
        variants={imageAnimation}
        initial="hidden"
        animate="visible"
        src="/ctaSVG.svg"
        alt="Call to Action Image"
      />
      <CTAText variants={textAnimation} initial="hidden" animate="visible">
        {data.cta && (
          <>
            <h3>
              <span>{data.cta[0]}</span>
            </h3>
            <h2>
              {data.cta[1]}
              <span>{data.cta[2]}</span>
            </h2>
            <h3>{data.cta[3]}</h3>
          </>
        )}
        <ButtonsContainer>
          <AnchorButton label="GitHub" icon="github" linkTo="https://github.com/NunoCPNP" blankTarget />
        </ButtonsContainer>
      </CTAText>
    </Wrapper>
  )
}

export default CTA
