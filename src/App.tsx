import React, { useState } from 'react'
import './App.css'
import SearchField from './components/SearchField'
import CardList from './components/CardList'
import User from './UserInterface'

const App = () => {
  const [data, setData] = useState<User[]>([])

  const handleDataFromGithub = (userData: User) => {
    setData((data): User[] => [...data, userData])
  }

  return (
    <div className='container'>
      <h1 className='centered'>The GitHub Card App</h1>
      <SearchField setDataFromGithub={handleDataFromGithub}/>
      <CardList data={data} />
    </div>
  )
}

export default App
