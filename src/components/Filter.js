import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetFilter } from '../reducers/filterReducer'

const Filter = () => {
    const notification = useSelector(state => state.notification)
    const dispatch = useDispatch()
  const handleChange = (event) => {
    // input-kentän arvo muuttujassa event.target.value
    dispatch(SetFilter(event.target.value))
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

export default Filter