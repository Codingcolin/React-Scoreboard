import React from 'react'
import Header from './Header'
import Players from './Players'
import AddPlayerForm from './AddPlayerForm'

const App = () => {
  return (
    <div className="scoreboard">
      <Header />
      <Players />
      <AddPlayerForm />
    </div>
  )
}

export default App
