import { useSelector,useDispatch } from 'react-redux'
import { handleVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => state)
  const sortedAnecdotes=anecdotes.toSorted((a,b)=>b.votes-a.votes)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(handleVote(id))
  }
  return(
    <>
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
  </>
  )
}

export default AnecdoteList