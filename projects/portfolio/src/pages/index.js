import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { info } from '@nptech/logger'
import { useControllersState } from '../context/controllers'

import { data } from '../dev-data/data'

import Page from '../components/page'
import HomeSection from '../sections/home'
import AboutSection from '../sections/about'
import ProjectsSection from '../sections/projects'
import ContactsSection from '../sections/contacts'
import Alert from '../components/alert'

const App = ({ navbar, cta, about, technologies, projects }) => {
  const { alerts } = useControllersState()

  useEffect(() => {
    info(' // --> repo welcome message ! ')
  }, [])

  return (
    <Page navbar={navbar}>
      <HomeSection cta={cta} />
      <AboutSection about={about} />
      <ProjectsSection projects={projects} />
      <ContactsSection />
      {alerts.visible && <Alert type={alerts.type} message={alerts.message} />}
    </Page>
  )
}

export async function getStaticProps() {
  const result = data()

  return {
    props: {
      navbar: result.navbar,
      cta: result.cta,
      about: result.about,
      technologies: result.technologies,
      projects: result.projects,
    },
  }
}

App.propTypes = {
  navbar: PropTypes.arrayOf(PropTypes.object).isRequired,
  cta: PropTypes.arrayOf(PropTypes.string).isRequired,
  about: PropTypes.arrayOf(PropTypes.array).isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default App
