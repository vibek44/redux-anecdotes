import { useSelector, useDispatch } from 'react-redux'
import { handleVote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'

const App = () => {
  const anecdotes = useSelector(state => state)
  const sortedAnecdotes=anecdotes.toSorted((a,b)=>b.votes-a.votes)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(handleVote(id))
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
      <AnecdoteForm />
      
    </div>
  )
}

export default App