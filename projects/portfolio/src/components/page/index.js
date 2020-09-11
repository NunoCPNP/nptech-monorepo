import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import { useControllersState } from '../../context/controllers'
import { dark, light } from '../../styles/themes'
import { Container } from './styles'

import SEO from '../seo'
import Header from '../header'
import Footer from '../footer'
import SideBar from '../side-bar'
import ThemeSwitch from '../theme-switch'

const Page = ({ header = true, footer = true, title, description, children }) => {
  const state = useControllersState()

  return (
    <ThemeProvider theme={state.darkMode ? dark : light}>
      <SEO
        title={`${title ? `${title}` : 'Nuno Pereira'}`}
        description={`${description ? `${description}` : 'Nuno Pereira - Developer Portfolio 2020'}`}
      />
      {header && <Header />}
      <Container>{children}</Container>
      {footer && <Footer />}
      <SideBar />
      <ThemeSwitch />
    </ThemeProvider>
  )
}

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  description: PropTypes.string,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  title: PropTypes.string,
}

export default Page
