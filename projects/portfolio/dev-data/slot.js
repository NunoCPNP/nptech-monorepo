const colors = {
  yellow: '#f9bf3b',
  white: '#fefffc',
  darkGrey: '#2c2f33',
  lightGrey: '#505050',
  black: '#26262c',
}

export const slot = () => {
  return `
      <style>
        .wrapper {
          display: flex;
          justify-content: center;
          background-color: ${colors.yellow};
          padding: 1rem;
        }
        .text {
          text-transform: uppercase;
          color: ${colors.black};
          font-size: 1.3rem;
          font-weight: 700;
        }
        .break {
          padding: 0 1rem;
        }
        .underline {
          text-decoration: underline;
        }
      </style>
      <div class="wrapper">
        <span class="text">Stay Home, Stay Safe</span>
        <span class="text break">|</span>
        <span class="text underline">#covid19</span>
      </div>
    `
}
