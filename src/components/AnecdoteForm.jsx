import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification,removeNotification } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdote'
const AnecdoteForm = () => {
  const dispatch=useDispatch()
  
  const addAnecdote= async(event) => {
    event.preventDefault()
    const anecdote=event.target.input1.value
    event.target.input1.value=''
    const newAnecdote=await anecdoteService.create(anecdote)
    dispatch(createAnecdote(newAnecdote))
    dispatch(setNotification(newAnecdote.content))
    setTimeout(()=>{
      dispatch(removeNotification(''))
    },5000)
  }
  return(
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
          <div><input name='input1'/></div>
          <button type='submit'>create</button>
      </form>
    </>
  )

}

export default AnecdoteForm