import { useControllers } from '../../context/controllers'

import { Icon } from './styles'

const BurgerIcon = () => {
  const [state, dispatch] = useControllers()

  return (
    <Icon className={state.sideBarOpen ? 'open' : ''} onClick={() => dispatch({ type: 'TOGGLE_SIDE_BAR' })}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Icon>
  )
}

export default BurgerIcon
