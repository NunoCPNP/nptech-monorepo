import { useControllers } from '../../context/controllers'
import { Wrapper } from './styles'

import LinkButton from '../link-button'

const ProjectDetails = () => {
  const [state, dispatch] = useControllers()
  const { selectedProject } = state

  return (
    <>
      {selectedProject && (
        <Wrapper data-testid="project-details">
          <div className="name">
            <h2>{selectedProject.name}</h2>
            <span>{selectedProject.url}</span>
          </div>
          {selectedProject.description.map((paragraph, index) => (
            <h3 key={index}>{paragraph}</h3>
          ))}
          <ul>
            {selectedProject.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
          <div className="button-wrapper" onClick={() => dispatch({ type: 'RESET_SELECTED_PROJECT' })}>
            <LinkButton label="Go Back" />
          </div>
        </Wrapper>
      )}
    </>
  )
}

export default ProjectDetails
