import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import { dark, light } from '../styles/themes'
import { useControllersState } from '../context/controllers'

import SEO from '../components/seo'
import { Alert } from '@nptech/components'

const Blog = () => {
  const { darkMode, alerts } = useControllersState()

  return (
    <>
      <SEO title="Nuno Pereira" description="Nuno Pereira - Front End Developer Portfolio 2020" />
      <ThemeProvider theme={darkMode ? dark : light}>
        <Wrapper>
          <section>
            <img src="toolbox.svg" alt="Coming soon" />
          </section>
        </Wrapper>
        <Alert message={alerts.message} type={alerts.type} />
      </ThemeProvider>
    </>
  )
}

export default Blog

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.dark};

  img {
    width: 25rem;
  }
`
