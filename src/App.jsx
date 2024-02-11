import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import FilterForm from './components/FilterForm'
import anecdoteService from './services/anecdote'
import {setAnecdote} from './reducers/anecdoteReducer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    anecdoteService.getAll()
      .then(anecdotes=>dispatch(setAnecdote(anecdotes)))
  },[])

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