import NextHead from 'next/head'
import GoogleFonts from 'next-google-fonts'

const Home = () => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap" />
    <NextHead>
      <title>Nuno Pereira | 2020</title>
      <meta name="og:title" content="Nuno Pereira | 2020" />
      <meta name="description" content="Nuno Pereira | JavaScript Developer 2020 Portfolio" />
      <meta name="og:description" content="Nuno Pereira | JavaScript Developer 2020 Portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="twitter:site" content="@nunocpnpereira" />
      <meta name="apple-mobile-web-app-title" content="nunopereira.tech" />
      <meta name="author" content="Nuno Pereira" />
    </NextHead>
    <div className="container">
      <img src="toolbox.svg" alt="Coming soon" />
    </div>
  </>
)

export default Home
