import { useSelector,useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification,removeNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector( state => {
    if(state.filter==='ALL'){
    return state.anecdotes }
    return state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.textfilter.toLowerCase()))
    })

  const sortedAnecdotes=anecdotes.toSorted((a,b)=>b.votes-a.votes)
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(voteAnecdote(id))
    const anecdoteForNotification=anecdotes.find(anecdote=>anecdote.id===id)
    dispatch(setNotification(anecdoteForNotification))
    setTimeout(()=>{
      dispatch(removeNotification(''))
    },5000)
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