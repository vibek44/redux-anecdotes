import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdote'



const anecdoteSlice=createSlice({
  name:'anecdote',
  initialState:[],
  reducers:{
    //console.log(JSON.parse(JSON.stringify(state))) to print state in redux
    voteAnecdotee(state,action){
      const votedAnecdote=action.payload
      return state.map(anecdote => anecdote.id !== votedAnecdote.id ? anecdote :votedAnecdote)

    },
    appendAnecdote(state,action){
        state.push(action.payload)
    },
    setAnecdote(state,action){
      return action.payload
    },
  }
})
export const { voteAnecdotee,appendAnecdote,setAnecdote}=anecdoteSlice.actions

export const initializeAnecdote=() => {
  return async dispatch => {
    const anecdotes=await anecdoteService.getAll()
    dispatch(setAnecdote(anecdotes))
  }
}

export const createAnecdote=(content) => {
  return async dispatch => {
    const newAnecdote=await anecdoteService.create(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const addVote=(id)=>{
  return async (dispatch,getState) =>{
    //console.log(id,getState());
    let changedAnecdote=getState().anecdotes.find(anecdote=>anecdote.id===id)
    changedAnecdote={...changedAnecdote,votes:changedAnecdote.votes+1}
    await anecdoteService.update(changedAnecdote)
    //console.log(changedAnecdote);
    
    dispatch(voteAnecdotee(changedAnecdote))
  }
}


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

