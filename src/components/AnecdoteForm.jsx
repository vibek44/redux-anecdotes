import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
const AnecdoteForm = () => {
  const dispatch=useDispatch()
  const addAnecdote= (event) => {
    event.preventDefault()
    const anecdote=event.target.input1.value
    event.target.input1.value=''
    dispatch(createAnecdote(anecdote))

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