const yellow = '#f9bf3b'
const white = '#fefffc'
const darkGrey = '#2c2f33'
const lightGrey= '#505050'
const black= '#26262c'

interface IDark {
  colors: {
    dark: string,
    light: string,
    highlight: string,
    white: string,
    black: string
  }
}

export const dark: IDark = {
  colors: {
    dark: `${darkGrey}`,
    light: `${lightGrey}`,
    highlight: `${yellow}`,
    white: `${white}`,
    black: `${black}`,
  },
}
