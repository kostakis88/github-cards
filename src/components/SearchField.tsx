import React, { useState, ChangeEvent, KeyboardEvent } from 'react'
import User from './../UserInterface'

interface SearchFieldProps {
  setDataFromGithub: (data: User) => void
}

const SearchField: React.FC<SearchFieldProps> = (props) => {
  const { setDataFromGithub } = props
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      fetch('https://api.github.com/users/' + value)
        .then(response => response.json())
        .then(data => setDataFromGithub(data))
        .catch(error => console.error('There was an error!', error))
      setValue('')
    }
  }

  return (
    <div className='search-field-wrapper'>
      <input type='text' value={value} onChange={handleChange} onKeyDown={handleKeyDown}/>
    </div>
  )
}

export default SearchField