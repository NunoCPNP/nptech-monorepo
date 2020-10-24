import { Global, css } from '@emotion/core'

const colors = {
  yellow: '#f9bf3b',
  white: '#fefffc',
  darkGrey: '#2c2f33',
  lightGrey: '#505050',
  black: '#26262c',
}

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'Karla';
          font-style: normal;
          font-weight: 400;
          src: url('/Karla-Regular.ttf') format('truetype');
        }

        @font-face {
          font-family: 'Karla';
          font-style: normal;
          font-weight: 700;
          src: url('/Karla-Bold.ttf') format('truetype');
        }

        html,
        body,
        p,
        ol,
        ul,
        li,
        dl,
        dt,
        dd,
        blockquote,
        figure,
        fieldset,
        legend,
        textarea,
        pre,
        iframe,
        hr,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          padding: 0;
        }

        ul {
          list-style: none;
        }

        button,
        input,
        select,
        textarea {
          margin: 0;
        }

        html {
          box-sizing: border-box;
          font-size: 62.5%;
          font-family: 'Karla', sans-serif;
          scroll-behavior: smooth;
        }

        *,
        *::before,
        *::after {
          box-sizing: inherit;
        }

        img,
        video {
          height: auto;
          max-width: 100%;
        }

        iframe {
          border: 0;
        }

        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        td,
        th {
          padding: 0;
        }

        td:not([align]),
        th:not([align]) {
          text-align: left;
        }

        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          position: fixed;
          z-index: 1000;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 5px;
          background: ${colors.yellow};
        }

        #nprogress::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 0.5rem;
          background: transparent;
        }
      `}
    />
  )
}

export default GlobalStyles
