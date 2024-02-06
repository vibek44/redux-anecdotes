import { setFilter } from '../reducers/filterReducer'
import { useDispatch, useSelector} from 'react-redux'

const FilterForm= () => {
  const dispatch=useDispatch()

  const handleChange=(e)=>{
   //console.log(e.target.value);
    dispatch(setFilter(e.target.value))
  }

return(
  <div>
  filter: <input type='text'  onChange={handleChange} />
  </div>
)
}

export default FilterForm