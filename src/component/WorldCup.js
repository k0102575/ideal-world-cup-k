import React from 'react';
import { withRouter } from 'react-router-dom';

const WorldCup = (props) => {
  const { id } = props.match.params;
  return <div>{id}</div>;
};

export default withRouter(WorldCup);
