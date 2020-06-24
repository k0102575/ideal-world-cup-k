import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  // Common
  const history = useHistory();

  // useState
  const [worldCups, setWorldCups] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect
  useEffect(() => {
    setLoading(true);
    fetch('/test.json')
      .then((response) => response.json())
      .then((data) => {
        setWorldCups(data.worldCups);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Fragment>
      {loading ? (
        <div>Loading...</div>
      ) : (
        worldCups.map((e, index) => {
          return (
            <div key={index}>
              <p
                onClick={() => {
                  history.push(`/world-cup/${e.id}`);
                }}
              >
                {e.id}
              </p>
              <p>{e.name}</p>
            </div>
          );
        })
      )}
    </Fragment>
  );
};

export default Home;
