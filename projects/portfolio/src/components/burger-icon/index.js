import { useControllers } from '../../context/controllers'
import { Burger } from './styles'

const BurgerIcon = () => {
  const [state, dispatch] = useControllers()

  return (
    <Burger>
      <div
        role="navigation"
        onClick={() => dispatch({ type: 'TOGGLE_SIDE_BAR' })}
        className={state.sideBarOpen ? 'burger burger-squeeze open' : 'burger burger-squeeze'}
      >
        <div className="burger-lines" />
      </div>
    </Burger>
  )
}

export default BurgerIcon
