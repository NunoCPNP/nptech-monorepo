import PropTypes from 'prop-types'
import logger from '@nptech/logger'
import { useControllersState } from '../context/controllers'
import { useEffect } from 'react'
import { data } from '../dev-data/data'

import { ThemeProvider } from 'emotion-theming'
import { dark, light } from '../styles/themes'

import { Alert } from '@nptech/components'

import Page from '../components/page'
import Header from '../components/header'
import HomeSection from '../sections/home'
import AboutSection from '../sections/about'
import ProjectsSection from '../sections/projects'
import ContactsSection from '../sections/contacts'

const App = ({ navbar, cta, about, projects }) => {
  const { darkMode, alerts } = useControllersState()

  useEffect(() => {
    logger('info', ' // --> repo welcome message ! ', true)
  }, [])

  return (
    <>
      <ThemeProvider theme={darkMode ? dark : light}>
        <div id="slots" style={{ height: '10rem' }} />
        <Header navbar={navbar} />
        <Page>
          <HomeSection cta={cta} />
          <AboutSection about={about} />
          <ProjectsSection projects={projects} />
          <ContactsSection />
          <Alert message={alerts.message} type={alerts.type} />
        </Page>
      </ThemeProvider>
    </>
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
