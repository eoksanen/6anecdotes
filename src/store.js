import { createStore, combineReducers, applyMiddleware  } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import anecdoteReducer, { initializeAnecdotes } from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'

//import anecdoteService from './services/anecdotes'



const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  filter: filterReducer,
  notification: notificationReducer
 
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

/*
anecdoteService.getAll().then(anecdotes =>
   {
    console.log('BACK',anecdotes)
    store.dispatch(initializeAnecdotes(anecdotes))
  }
)
*/


export default store