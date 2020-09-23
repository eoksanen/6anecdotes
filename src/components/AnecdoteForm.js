import React from 'react'
import { connect } from 'react-redux'
//import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'


const NewAnecdote = (props) => {
 // const dispatch = useDispatch()

  
  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
  
    props.createAnecdote(content)
    //dispatch(createAnecdote(content))
    //dispatch(NotificationChange(['notificationShow','New anecdote created with following content: ' + content]))

  } 

  return (
    <div>
    <h2>create new</h2>
        <form onSubmit={addAnecdote}>
            <div><input name="anecdote" /></div>
            <button type="submit">create</button>
        </form>
    </div>
  )
}
const mapDispatchToProps = {
  createAnecdote
}
const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAnecdote)