import styled from '@emotion/styled'

export const Container = styled('main')`
  background-color: ${({ theme }) => theme.colors.background};
  transition: 0.3s ease background-color;
  overflow: hidden;
`
