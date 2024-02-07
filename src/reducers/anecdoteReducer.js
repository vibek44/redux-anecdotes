import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
//map method is used to create initial state passed to reducer from array of anecdotesAtStart
const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice=createSlice({
  name:'anecdote',
  initialState,
  reducers:{
    createAnecdote(state,action){
      const content=action.payload
      state.push({
        content,
        id:getId(),
        votes:0
      })
    },
    //console.log(JSON.parse(JSON.stringify(state)))
    voteAnecdote(state,action){
      const id=action.payload
      const anecdoteToVote=state.find(anecdote =>anecdote.id===id )
      const votedAnecdote = {
        ...anecdoteToVote,
        votes:anecdoteToVote.votes+1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote :votedAnecdote)

    },
  }
})
export const { createAnecdote, voteAnecdote}=anecdoteSlice.actions
export default anecdoteSlice.reducer


/*

const anecdoteReducer = (state = initialState, action) => {
  switch(action.type){
    case 'NEW_ANECDOTE':
      return state.concat(action.payload)

    case 'VOTE': {
      const id =action.payload.id
      //console.log(typeof id)
      const anecdoteToVote=state.find(anecdote =>anecdote.id===id )
      //console.log(typeof anecdoteToVote.id); 
      const votedAnecdote = {
        ...anecdoteToVote,
        votes:anecdoteToVote.votes+1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote :votedAnecdote)
    }
    
    default:
    return state
  }

  
}
//action creator
export const createAnecdote = (anecdote) => {
  return {
    type:'NEW_ANECDOTE',
    payload: { 
      content:anecdote,
      id:getId(),
      votes:0
    }
  }
}

//action creator
export const handleVote = (id) => {
  return {
    type:'VOTE',
    payload:{ id }
  }
}
*/

