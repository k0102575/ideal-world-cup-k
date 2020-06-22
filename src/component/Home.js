import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [worldCups, setWorldCups] = useState([]);
  const [loading, setLoading] = useState(false);

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
              <p>
                <Link to={`/world-cup/${e.id}`}>{e.id}</Link>
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
