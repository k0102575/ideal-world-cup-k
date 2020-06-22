import React from 'react';
import { withRouter } from 'react-router-dom';

const Ranking = (props) => {
  const { id } = props.match.params;
  return <div>{id}</div>;
};

export default withRouter(Ranking);
