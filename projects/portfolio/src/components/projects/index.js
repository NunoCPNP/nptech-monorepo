import PropTypes from 'prop-types'

import Card from '../card'

const Projects = ({ projects, setProject }) => {
  return (
    <>
      {projects &&
        projects.map(({ id, image, alt, background }) => (
          <div
            key={id}
            onClick={() => {
              const project = projects.filter((p) => p.id === id)[0]
              setProject(project)
            }}
          >
            <Card img={image} alt={alt} background={background} />
          </div>
        ))}
    </>
  )
}

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProject: PropTypes.func.isRequired,
}

export default Projects
