import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotificationChange } from '../reducers/notificationReducer'


const Notification = () => {
  const notification = useSelector(state => state.notification)

  const dispatch = useDispatch()
  setTimeout(() => {
    dispatch(NotificationChange(['notificationHide','---']))
  }, 7000)
  return (
    <div className={notification[0]}>
      {notification[1]}
    </div>
  )
}

export default Notification