import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import FilterForm from './components/FilterForm'

import { initializeAnecdote } from './reducers/anecdoteReducer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(initializeAnecdote())
  },[ ])

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      < FilterForm />
      <AnecdoteList />
      <AnecdoteForm />
      
    </div>
  )
}

export default App