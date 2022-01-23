import React from 'react'
import User from '../UserInterface'
import Card from './Card'

interface CardListProps {
  data: User[]
}

const CardList: React.FC<CardListProps> = (props) => {
  const { data } = props 

  return (
    <>
    {data.map((user: any) => {
      return <Card key={user.id} user={user}/>
    })}
    </>
  )
}

export default CardList