import React from 'react';
import { Card } from 'component';
import styled from 'styled-components';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_WORLDCUPS, ADD_WORLDCUP } from '../gql/tag';

const Home = () => {
  const { loading, error, data } = useQuery(GET_WORLDCUPS);
  const [addTodo, { worldCupData }] = useMutation(ADD_WORLDCUP);

  const handleClick = () => {
    addTodo({ variables: { id: 130, name: 'test', description: 'mutation Test' } });
  };

  if (loading) return <div>...loading</div>;

  if (error) {
    console.error(error);
    return <div className={'posts-error-message'}>error occured!</div>;
  }

  return (
    <>
      <button onClick={handleClick}>버튼</button>
      <CardContainer>
        {data.worldCups.map((worldCup, index) => {
          return <Card key={index} {...worldCup} />;
        })}
      </CardContainer>
    </>
  );
};

export default Home;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
`;
