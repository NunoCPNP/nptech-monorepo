import { useControllersState } from '../../context/controllers'
import { Wrapper } from './styles'

const About = () => {
  const { data } = useControllersState()

  return (
    <Wrapper data-testid="about-component">
      <div>
        {data.about &&
          data.about.map((paragraph, index) => (
            <p key={index}>
              {paragraph.map((item) => (
                <span key={item.id}>
                  {item.styled ? <span className="styled">{item.data}</span> : <span>{item.data}</span>}
                </span>
              ))}
            </p>
          ))}
      </div>
    </Wrapper>
  )
}

export default About
