import PropTypes from 'prop-types'
import { Wrapper } from './styles'

import LinkButton from '../link-button'

const ProjectDetails = ({ project, setProject }) => {
  return (
    <>
      {project && (
        <Wrapper data-testid="project-details">
          <div className="name">
            <h2>{project.name}</h2>
            <span>{project.url}</span>
          </div>
          {project.description.map((paragraph, index) => (
            <h3 key={index}>{paragraph}</h3>
          ))}
          <ul>
            {project.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
          <div className="button-wrapper" onClick={() => setProject(null)}>
            <LinkButton label="Go Back" />
          </div>
        </Wrapper>
      )}
    </>
  )
}

ProjectDetails.propTypes = {
  project: PropTypes.object,
  setProject: PropTypes.func.isRequired,
}

export default ProjectDetails
