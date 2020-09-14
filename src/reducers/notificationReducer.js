const notificationReducer = (state = 'this is from notification reducer', action) => {
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