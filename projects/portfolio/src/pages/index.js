import PropTypes from 'prop-types'
import { info } from '@nptech/logger'

import { data } from '../dev-data/data'
import { useControllersDispatch } from '../context/controllers'

import Page from '../components/page'
import HomeSection from '../sections/home'
import AboutSection from '../sections/about'
import ProjectsSection from '../sections/projects'
import ContactsSection from '../sections/contacts'

const App = (props) => {
  const dispatch = useControllersDispatch()

  React.useEffect(() => {
    dispatch({ type: 'SET_DATA', payload: props })

    info(' // --> repo welcome message ! ')
  }, [])

  return (
    <Page>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactsSection />
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
}

export default App
