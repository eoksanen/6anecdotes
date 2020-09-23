import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ClearNotification } from '../reducers/notificationReducer'


const Notification = () => {
  const notification = useSelector(state => state.notification)
  console.log('notification ',notification)


  return (
    <div className = 'notificationShow'>
      {notification}
    </div>
  )
}

export default Notification