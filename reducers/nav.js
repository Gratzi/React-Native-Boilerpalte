const nav = (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE_MENU':
      return action.id
    default:
      return state
  }
}

export default nav
