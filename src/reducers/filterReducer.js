
const filterReducer = (state=null, action) => {
  switch(action.type){
    case 'SET_FILTER':
      return action.payload
    default:
     return state;
  }
}

//action creator
export const setFilter=(filter)=>{
  return{
    type:'SET_FILTER',
    payload:filter
  }
}

export default filterReducer