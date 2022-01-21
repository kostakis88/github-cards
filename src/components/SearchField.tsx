import React, { useState, ChangeEvent, KeyboardEvent } from 'react'

const SearchField = () => {
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log(value)
      fetch('https://api.github.com/users/' + value)
        .then(response => response.json())
        .then(data => console.log(data))
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