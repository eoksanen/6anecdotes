import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NotificationChange } from '../reducers/notificationReducer'


const Notification = () => {
  const notification = useSelector(state => state.notification)
  console.log('not ', notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const dispatch = useDispatch()
  setTimeout(() => {
    dispatch(NotificationChange('---'))
  }, 7000)
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification