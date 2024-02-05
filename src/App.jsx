import { useSelector, useDispatch } from 'react-redux'
import { handleVote,createAnecdote } from './reducers/anecdoteReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const sortedAnecdotes=anecdotes.toSorted((a,b)=>b.votes-a.votes)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(handleVote(id))
  }

  const addAnecdote= (event) => {
    event.preventDefault()
    const anecdote=event.target.input1.value
    event.target.input1.value=''
    dispatch(createAnecdote(anecdote))

  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name='input1'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App