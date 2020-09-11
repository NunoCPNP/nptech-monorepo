import PropTypes from 'prop-types'
import { Container, Wrapper } from './styles'

const ProjectsGrid = ({ children, items, breakTo, gap, maxWidth, padding, top = 0 }) => {
  return (
    <Wrapper>
      <Container items={items} breakTo={breakTo} gap={gap} maxWidth={maxWidth} padding={padding} top={top}>
        {children}
      </Container>
    </Wrapper>
  )
}

ProjectsGrid.propTypes = {
  items: PropTypes.number.isRequired,
  breakTo: PropTypes.number.isRequired,
  gap: PropTypes.number.isRequired,
  maxWidth: PropTypes.number.isRequired,
  padding: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
}

export default ProjectsGrid
