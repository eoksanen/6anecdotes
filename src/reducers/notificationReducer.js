const notificationReducer = (state = ['notificationHide', ''], action) => {
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.notification
      default:
        return state
    }
  }
  
  export const NotificationChange = (notification) => {
    return {
      type: 'SET_NOTIFICATION',
      notification,
    }
  }
  
  export default notificationReducer