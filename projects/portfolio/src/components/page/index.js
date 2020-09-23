import PropTypes from 'prop-types'
import { useControllersState } from '../../context/controllers'
import { Wrapper } from './styles'

import SEO from '../seo'

import Footer from '../footer'
import SideBar from '../side-bar'
import ThemeSwitch from '../theme-switch'

const Page = ({ footer = true, title, description, navbar, children }) => {
  const { themeSelector } = useControllersState()

  return (
    <>
      <SEO
        title={`${title ? `${title}` : 'Nuno Pereira'}`}
        description={`${description ? `${description}` : 'Nuno Pereira - Front End Developer Portfolio 2020'}`}
      />
      <Wrapper>
        <main>{children}</main>
        {footer && <Footer />}
      </Wrapper>
      <SideBar navbar={navbar} />
      {themeSelector && <ThemeSwitch />}
    </>
  )
}

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  navbar: PropTypes.arrayOf(PropTypes.object).isRequired,
  description: PropTypes.string,
  footer: PropTypes.bool,
  title: PropTypes.string,
}

export default Page
