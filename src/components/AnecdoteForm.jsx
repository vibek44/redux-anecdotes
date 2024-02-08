import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification,removeNotification } from '../reducers/notificationReducer'
const AnecdoteForm = () => {
  const dispatch=useDispatch()
  const addAnecdote= (event) => {
    event.preventDefault()
    const anecdote=event.target.input1.value
    event.target.input1.value=''
    dispatch(createAnecdote(anecdote))
    dispatch(setNotification(anecdote))
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