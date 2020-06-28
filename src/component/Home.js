import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Card } from 'component';
import styled from 'styled-components';

const Home = () => {
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
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <CardContainer>
          {worldCups.map((worldCup, index) => {
            return <Card key={index} {...worldCup} />;
          })}
        </CardContainer>
      )}
    </>
  );
};

export default Home;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
`;
