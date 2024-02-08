import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import FilterForm from './components/FilterForm'

const App = () => {

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      < FilterForm />
      <AnecdoteList />
      <AnecdoteForm />
      
    </div>
  )
}

export default App