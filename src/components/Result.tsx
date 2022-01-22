import React from "react";
import User from "./../UserInterface";

interface ResultProps {
  data: User | undefined;
}

const Result: React.FC<ResultProps> = (props) => {
  const { data } = props;

  return (
    <>
      <img alt={data?.name} src={data?.avatar_url} />
      <h3>{data?.name}</h3>
      <h4>{data?.location}</h4>
      {data && (
        <div>
          <h5>Public repos: {data?.public_repos}</h5>
        </div>
      )}
    </>
  );
};

export default Result;
