import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { useState } from 'react'
import { motion, AnimatePresence, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import SectionTitle from '../components/section-title'
import OneColumnGrid from '../components/one-column-grid'
import Projects from '../components/projects'
import ProjectDetails from '../components/project-details'
import Card from '../components/card'

const ProjectsSection = ({ projects }) => {
  const [project, setProject] = useState(null)

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
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
      },
    },
  }

  return (
    <Section id="Projects" ref={ref} animate={controls} initial="hidden" variants={sectionAnimation}>
      <SectionTitle
        uppercase
        title="My Latest Projects"
        subTitle="Some of the latest Projects I have been working on"
      />
      {!project ? (
        <AnimatePresence exitBeforeEnter>
          <motion.div key="projects-list" initial={{ x: '-100vw' }} animate={{ x: 0 }} exit={{ x: '100vw' }}>
            <OneColumnGrid items={4} breakTo={2} gap={4} maxWidth={140} padding={4} top={4}>
              <Projects projects={projects} setProject={setProject} />
            </OneColumnGrid>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence exitBeforeEnter>
          <motion.div key="project-details" initial={{ x: '-100vw' }} animate={{ x: 0 }} exit={{ x: '100vw' }}>
            <OneColumnGrid items={4} breakTo={2} gap={4} maxWidth={140} padding={4} top={4}>
              <Card img={project.image} alt={project.alt} />
              <ProjectDetails project={project} setProject={setProject} />
            </OneColumnGrid>
          </motion.div>
        </AnimatePresence>
      )}
    </Section>
  )
}

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProjectsSection

const Section = styled(motion.section)`
  padding-top: 5.5rem;
`
