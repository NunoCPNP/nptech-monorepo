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

    case 'SET_SELECTED_PROJECT': {
      const project = state.data.projects.filter((project) => project.id === action.payload)

      return {
        ...state,
        selectedProject: { ...project[0] },
      }
    }

    case 'RESET_SELECTED_PROJECT': {
      return {
        ...state,
        selectedProject: undefined,
      }
    }

    case 'SET_DATA': {
      return {
        ...state,
        data: { ...action.payload },
      }
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
