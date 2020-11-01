import styled from '@nptech/theme-provider'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.items}, 1fr);
  grid-gap: ${(props) => props.gap}rem;
  width: 100%;
  max-width: ${(props) => props.maxWidth}rem;
  padding: ${(props) => props.padding}rem;
  margin-top: ${(props) => props.top}rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(${(props) => props.breakTo}, 1fr);
  }
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`
