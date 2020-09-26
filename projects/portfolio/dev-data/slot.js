import { yellow, black } from '@nptech/styles'

export const slot = () => {
  return `
      <style>
        .wrapper {
          display: flex;
          justify-content: center;
          background-color: ${yellow};
          padding: 1rem;
        }
        .text {
          text-transform: uppercase;
          color: ${black};
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
