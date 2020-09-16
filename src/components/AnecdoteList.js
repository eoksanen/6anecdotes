

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteOf } from '../reducers/anecdoteReducer'
import { NotificationChange } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
          <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={handleClick }>vote</button>
          </div>
        </div>
  )
}

const Anecdotes = () => {

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const voteAnecdote = (anecdote) => {
    dispatch(voteOf(anecdote.id))
    dispatch(NotificationChange(['notificationShow','YOU VOTED: ' + anecdote.content]))
  
  }
  const filteredAnecdotes =() => {

 
    
    return ( filter ? anecdotes.filter(ad => {return ad.content.toLowerCase().includes(filter.toLowerCase())})
    : anecdotes 
    )
  }

  return(
      <div>

    {
    filteredAnecdotes().sort(function(a, b){return b.votes-a.votes}).map(anecdote =>

        <Anecdote key={anecdote.id} anecdote={anecdote} handleClick= {() => voteAnecdote(anecdote)}/>

    )}
    </div>
  )
}

export default Anecdotes