import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_WORLDCUP } from '../gql/tag';

const WorldCup = () => {
  // Params
  const params = useParams();
  const id = params.id;

  const { loading, error, data } = useQuery(GET_WORLDCUP, {
    variables: { id: parseInt(id) },
  });

  if (loading) return <div>...loading</div>;

  if (error) {
    console.error(error);
    return <div className={'posts-error-message'}>error occured!</div>;
  }

  return (
    <>
      <p>{data.worldCup.id}</p>
      <p>{data.worldCup.name}</p>
      <p>{data.worldCup.description}</p>
    </>
  );
};

export default WorldCup;
