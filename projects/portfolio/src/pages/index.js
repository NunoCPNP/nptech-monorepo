import PropTypes from 'prop-types'
import logger from '@nptech/logger'
import styled from '@emotion/styled'
import { useEffect } from 'react'
import { useControllersState } from '../context/controllers'
import { data } from '../../dev-data/data'
import { settings } from '../../dev-data/settings'
import { useSlot } from '../hooks/useSlot'

import Alert from '../components/alert'
import SEO from '../components/seo'
import Header from '../components/header'
import Footer from '../components/footer'
import SideBar from '../components/side-bar'
import ThemeSwitch from '../components/theme-switch'

import HomeSection from '../sections/home'
import AboutSection from '../sections/about'
import ProjectsSection from '../sections/projects'
import ContactsSection from '../sections/contacts'

import { Provider } from '@nptech/theme-provider'

const App = ({ navbar, cta, about, projects, settings }) => {
  const { darkMode, alerts } = useControllersState()
  const slot = useSlot()

  useEffect(() => {
    logger('info', 'Looking at code? You can find it at www.github.com/nunocpnp', true)
  }, [])

  return (
    <>
      <SEO title="Nuno Pereira" description="Nuno Pereira - Front End Developer Portfolio 2020" />
      <Provider darkmode={darkMode}>
        {settings.slot && <div id="slot" />}
        <Header navbar={navbar} />
        <Wrapper>
          <HomeSection cta={cta} slot={slot} />
          <AboutSection about={about} />
          <ProjectsSection projects={projects} />
          <ContactsSection />
          <Alert message={alerts.message} type={alerts.type} />
        </Wrapper>
        <Footer />
        <SideBar navbar={navbar} />
        {settings.themeSelector && <ThemeSwitch />}
      </Provider>
    </>
  )
}

export async function getStaticProps() {
  const dataResponse = data()
  const settingsResponse = settings()

  return {
    props: {
      navbar: dataResponse.navbar,
      cta: dataResponse.cta,
      about: dataResponse.about,
      technologies: dataResponse.technologies,
      projects: dataResponse.projects,
      settings: settingsResponse.settings,
    },
  }
}

App.propTypes = {
  navbar: PropTypes.arrayOf(PropTypes.object).isRequired,
  cta: PropTypes.arrayOf(PropTypes.string).isRequired,
  about: PropTypes.arrayOf(PropTypes.array).isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  settings: PropTypes.object.isRequired,
}

export default App

const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.dark};
  transition: 0.3s ease background-color;
  overflow: hidden;
`
