import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
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

const CTA = ({ cta }) => {
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
        {cta && (
          <>
            <h3>
              <span>{cta[0]}</span>
            </h3>
            <h2>
              {cta[1]}
              <span>{cta[2]}</span>
            </h2>
            <h3>{cta[3]}</h3>
          </>
        )}
        <ButtonsContainer>
          <AnchorButton label="GitHub" icon="github" linkTo="https://github.com/NunoCPNP" blankTarget />
        </ButtonsContainer>
      </CTAText>
    </Wrapper>
  )
}

CTA.propTypes = {
  cta: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default CTA
