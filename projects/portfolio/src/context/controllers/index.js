import { reducer } from './reducer'
import { initialState } from './initialState'

const ControllersStateContext = React.createContext()
const ControllersDispatchContext = React.createContext()

// eslint-disable-next-line react/prop-types
export const ControllersProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <ControllersStateContext.Provider value={state}>
      <ControllersDispatchContext.Provider value={dispatch}>{children}</ControllersDispatchContext.Provider>
    </ControllersStateContext.Provider>
  )
}

export const useControllersState = () => {
  const context = React.useContext(ControllersStateContext)

  if (context === undefined) {
    throw new Error('useControllersState must be used within ControllersProvider')
  }

  return context
}

export const useControllersDispatch = () => {
  const context = React.useContext(ControllersDispatchContext)

  if (context === undefined) {
    throw new Error('useControllersDispatch must be used within ControllersProvider')
  }

  return context
}

export const useControllers = () => {
  return [useControllersState(), useControllersDispatch()]
}
