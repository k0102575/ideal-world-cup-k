import React from 'react';
import { useParams } from 'react-router-dom';

const Ranking = () => {
  // Params
  const params = useParams();
  const id = params.id;

  return <div>{id}</div>;
};

export default Ranking;
