import { useControllers } from '../../context/controllers'
import { Wrapper } from './styles'

const ThemeSwitch = () => {
  const [state, dispatch] = useControllers()

  return (
    <Wrapper>
      <input type="checkbox" defaultChecked={state.darkMode} onClick={() => dispatch({ type: 'THEME_SWITCH' })} />
      <span></span>
    </Wrapper>
  )
}

export default ThemeSwitch
