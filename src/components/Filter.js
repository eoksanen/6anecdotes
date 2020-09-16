import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SetFilter } from '../reducers/filterReducer'

const Filter = () => {
    const filter = useSelector(state => state.filter)
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