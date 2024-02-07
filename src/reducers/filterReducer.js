import { createSlice } from '@reduxjs/toolkit'

const filterSlice=createSlice({
  name:'filter',
  initialState:'',
  reducers: {
    setFilter(state,action) {
      return action.payload
    }
  },
})

export  const  { setFilter } =filterSlice.actions
export default filterSlice.reducer



/*const filterReducer = (state='', action) => {
  switch(action.type){
    case 'SET_FILTER':
      return action.payload
    default:
     return state;
  }
}

//action creator for filterReducer
export const setFilter=(filter)=>{
  return{
    type:'SET_FILTER',
    payload:filter
  }
}*/

