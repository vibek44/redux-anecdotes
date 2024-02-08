import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name:'notification',
  initialState:'',
  reducers:{
    setNotification(state,action){
      //console.log(typeof action.payload.id);
      if(action.payload.id===undefined && typeof action.payload!==Object)
      return state=`you added ' ${action.payload}' `
      if( typeof action.payload.id==='string')
      return state=`you voted ' ${action.payload.content}' `
    },
    removeNotification(state,action){
     return state=action.payload
    },
  }
})

export const { setNotification,removeNotification }=notificationSlice.actions
export default notificationSlice.reducer