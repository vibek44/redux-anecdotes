import { useSelector,useDispatch } from 'react-redux'
import { handleVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector( state => {
    if(state.filter==='ALL'){
    return state.anecdotes }
    return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.textfilter.toLowerCase()))
    })

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