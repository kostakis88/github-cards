import React, { useState, ChangeEvent, KeyboardEvent, useEffect } from 'react'
import User from './../UserInterface'

interface SearchFieldProps {
  setDataFromGithub: (data: User | undefined) => void
}

const SearchField: React.FC<SearchFieldProps> = (props) => {
  const { setDataFromGithub } = props
  const [value, setValue] = useState('')
  const [githubData, setGithubData] = useState<User | undefined>(undefined)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetch('https://api.github.com/users/' + value)
        .then(response => response.json())
        .then(data => setGithubData(data))
      setValue('')
    }
  }

  useEffect(() => {
    setDataFromGithub(githubData)
  },[setDataFromGithub, githubData])

  return (
    <div className='search-field-wrapper'>
      <input type='text' value={value} onChange={handleChange} onKeyDown={handleKeyDown}/>
    </div>
  )
}

export default SearchField