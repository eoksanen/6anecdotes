const filterReducer = (state = 'is', action) => {
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.filter
      default:
        return state
    }
  }
  
  export const SetFilter = (filter) => {
    return {
      type: 'SET_FILTER',
      filter,
    }
  }
  
  export default filterReducer