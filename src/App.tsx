import React, { useState } from 'react'
import './App.css'
import SearchField from './components/SearchField'
import Result from './components/Result'
import User from './UserInterface'

const App = () => {
  const [data, setData] = useState<User | undefined>(undefined)

  const handleDataFromGithub = (data: User | undefined) => {
    setData(data)
  }

  return (
    <div className='container'>
      <h1 className='centered'>The GitHub Card App</h1>
      <SearchField setDataFromGithub={handleDataFromGithub}/>
      <Result data={data}/>
    </div>
  )
}

export default App
