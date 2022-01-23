import React from "react";
import User from "../UserInterface";

interface CardProps {
  user: User
}

const Card: React.FC<CardProps> = (props) => {
  const { user } = props

  return (
    <>
      <img alt={user.name} src={user.avatar_url} />
      <h3>{user.name}</h3>
      <h4>{user.location}</h4>
      <div>
        <h5>Public repos: {user.public_repos}</h5>
      </div>
    </>
  );
};

export default Card;
