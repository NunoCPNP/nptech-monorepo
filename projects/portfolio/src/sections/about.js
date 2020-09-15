import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import SectionTitle from '../components/section-title'
import OneColumnGrid from '../components/one-column-grid'
import About from '../components/about'

const AboutSection = ({ about }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    rootMargin: '-100px',
    triggerOnce: true,
  })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const sectionAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
      },
    },
  }

  return (
    <Section id="About" ref={ref} animate={controls} initial="hidden" variants={sectionAnimation}>
      <SectionTitle uppercase title="About" />
      <OneColumnGrid items={4} breakTo={2} gap={4} maxWidth={140} padding={4} top={4}>
        <About about={about} />
      </OneColumnGrid>
    </Section>
  )
}

AboutSection.propTypes = {
  about: PropTypes.arrayOf(PropTypes.array).isRequired,
}

export default AboutSection

const Section = styled(motion.section)`
  padding-top: 5.5rem;
  overflow: hidden;
`
