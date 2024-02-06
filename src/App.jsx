
import AnecdoteList from './components/AnecdoteList'
import AnecdoteForm from './components/AnecdoteForm'
import FilterForm from './components/FilterForm'

const App = () => {

  return (
    <div>
      <h2>Anecdotes</h2>
      < FilterForm />
      <AnecdoteList />
      <AnecdoteForm />
      
    </div>
  )
}

export default App