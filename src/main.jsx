import ReactDOM from 'react-dom/client'
import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  anecdotes:anecdoteReducer,
  textfilter:filterReducer
})

const store = configureStore({ reducer })
console.log(store.getState());
//const store = configureStore({reducer:anecdoteReducer})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)