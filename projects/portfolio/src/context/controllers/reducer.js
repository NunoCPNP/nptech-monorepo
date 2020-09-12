export const reducer = (state, action) => {
  switch (action.type) {
    case 'THEME_SWITCH': {
      return {
        ...state,
        darkMode: !state.darkMode,
      }
    }

    case 'TOGGLE_SIDE_BAR': {
      return {
        ...state,
        sideBarOpen: !state.sideBarOpen,
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
