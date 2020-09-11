import App from 'next/app'
import Router from 'next/router'
import nprogress from 'nprogress'
import debounce from 'lodash.debounce'

import { ControllersProvider } from '../context/controllers'

import GlobalStyles from '../styles/GlobalStyles'

//? Only show nprogress after 500ms
const start = debounce(nprogress.start, 500)

Router.events.on('routeChangeStart', start)

Router.events.on('routeChangeComplete', (url) => {
  start.cancel()
  nprogress.done()
  window.scrollTo(0, 0)
})

Router.events.on('routeChangeError', () => {
  start.cancel()
  nprogress.done()
})

export function reportWebVitals(metric) {
  if (metric.label === 'web-vital') {
    console.log(metric)
  }
}

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <ControllersProvider>
          <Component {...pageProps} />
          <GlobalStyles />
        </ControllersProvider>
      </>
    )
  }
}

export default MyApp
