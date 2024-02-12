import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name:'notification',
  initialState:'',
  reducers:{
    addNotification(state,action){
      //console.log(typeof action.payload.id);
      if(action.payload.id===undefined && typeof action.payload!==Object)
      return `you added ' ${action.payload}' `
      if( typeof action.payload.id==='string')
      return `you voted ' ${action.payload.content}' `
    },
    removeNotification(state,action){
     return state=action.payload
    },
  }
})

export const { addNotification,removeNotification }=notificationSlice.actions

export const setNotification=(anecdote,showTime)=>{
  return async dispatch=> {
    dispatch(addNotification(anecdote))
    setTimeout(()=>{
      dispatch(removeNotification(''))
    },showTime*1000)
  }
}


export default notificationSlice.reducer