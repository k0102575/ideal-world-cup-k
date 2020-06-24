import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  // history
  const history = useHistory();

  // useEffect
  useEffect(() => {
    history.push('/');
  }, [history]);

  return <div>Not Found</div>;
};

export default NotFound;
