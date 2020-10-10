import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { Container, Wrapper } from './styles'

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
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  }

  return (
    <Container id="About">
      <Wrapper ref={ref} animate={controls} initial="hidden" variants={sectionAnimation}>
        <SectionTitle uppercase title="About" />
        <OneColumnGrid items={4} breakTo={2} gap={4} maxWidth={140} padding={4} top={4}>
          <About about={about} />
        </OneColumnGrid>
      </Wrapper>
    </Container>
  )
}

AboutSection.propTypes = {
  about: PropTypes.arrayOf(PropTypes.array).isRequired,
}

export default AboutSection
