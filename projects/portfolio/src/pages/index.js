import PropTypes from 'prop-types'
import logger from '@nptech/logger'
import styled from '@emotion/styled'
import { useControllersState } from '../context/controllers'
import { useEffect } from 'react'
import { data } from '../../dev-data/data'
import { slot } from '../../dev-data/slot'
import { ThemeProvider } from 'emotion-theming'
import { dark, light } from '../styles/themes'

import { Alert } from '@nptech/components'
import SEO from '../components/seo'
import Header from '../components/header'
import Footer from '../components/footer'
import SideBar from '../components/side-bar'
import ThemeSwitch from '../components/theme-switch'
import HomeSection from '../sections/home'
import AboutSection from '../sections/about'
import ProjectsSection from '../sections/projects'
import ContactsSection from '../sections/contacts'

const App = ({ navbar, cta, about, projects }) => {
  const { darkMode, alerts, themeSelector } = useControllersState()

  useEffect(() => {
    logger('info', ' // --> repo welcome message ! ', true)
  }, [])

  useEffect(() => {
    const div = document.getElementById('slots')
    const response = slot()

    div.innerHTML = response
  }, [])

  return (
    <>
      <SEO title="Nuno Pereira" description="Nuno Pereira - Front End Developer Portfolio 2020" />
      <ThemeProvider theme={darkMode ? dark : light}>
        <div id="slots" />
        <Header navbar={navbar} />
        <Wrapper>
          <HomeSection cta={cta} />
          <AboutSection about={about} />
          <ProjectsSection projects={projects} />
          <ContactsSection />
          <Alert message={alerts.message} type={alerts.type} />
        </Wrapper>
        <Footer />
        <SideBar navbar={navbar} />
        {themeSelector && <ThemeSwitch />}
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

const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  transition: 0.3s ease background-color;
  overflow: hidden;
`
