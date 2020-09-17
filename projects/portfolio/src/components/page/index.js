import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import { useControllersState } from '../../context/controllers'
import { dark, light } from '../../styles/themes'
import { Wrapper } from './styles'

import SEO from '../seo'
import Header from '../header'
import Footer from '../footer'
import SideBar from '../side-bar'
import ThemeSwitch from '../theme-switch'

const Page = ({ header = true, footer = true, title, description, navbar, children }) => {
  const { darkMode } = useControllersState()

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <SEO
        title={`${title ? `${title}` : 'Nuno Pereira'}`}
        description={`${description ? `${description}` : 'Nuno Pereira - Front End Developer Portfolio 2020'}`}
      />
      <Wrapper>
        {header && <Header navbar={navbar} />}
        <main>{children}</main>
        {footer && <Footer />}
      </Wrapper>
      <SideBar navbar={navbar} />
      <ThemeSwitch />
    </ThemeProvider>
  )
}

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  navbar: PropTypes.arrayOf(PropTypes.object).isRequired,
  description: PropTypes.string,
  footer: PropTypes.bool,
  header: PropTypes.bool,
  title: PropTypes.string,
}

export default Page
