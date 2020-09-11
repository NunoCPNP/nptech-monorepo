import Card from '../card'

import { useControllers } from '../../context/controllers'

const Projects = () => {
  const [state, dispatch] = useControllers()
  const { data } = state

  return (
    <>
      {data.projects &&
        data.projects.map(({ id, image, alt }) => (
          <div key={id} onClick={() => dispatch({ type: 'SET_SELECTED_PROJECT', payload: id })}>
            <Card img={image} alt={alt} />
          </div>
        ))}
    </>
  )
}

export default Projects
