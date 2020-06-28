import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Card = (props) => {
  const { id, name, description, img } = props;

  const history = useHistory();

  const goStart = () => {
    history.push(`/world-cup/${id}`);
  };

  const goRanking = () => {
    history.push(`/ranking/${id}`);
  };

  return (
    <CardBox>
      <CardSection>
        <CardImage src={require('assets/' + img)}></CardImage>
      </CardSection>
      <CardSection>
        <CardTextWrapper>
          <CardTitle>{name}</CardTitle>
        </CardTextWrapper>
        <CardTextWrapper>
          <CardDescription>{description}</CardDescription>
        </CardTextWrapper>
      </CardSection>
      <CardButtonWrapper>
        <CardButton onClick={goStart}>시작하기</CardButton>
        <CardButton onClick={goRanking}>랭킹보기</CardButton>
      </CardButtonWrapper>
    </CardBox>
  );
};

export default Card;

const CardBox = styled.div`
  max-width: 15rem;
  min-width: 15rem;

  border-radius: 6px;
  color: #333;

  margin: 1.2rem;
  transition: all 0.2s ease-out;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    box-shadow: 0 0 4em 0px rgba(0, 0, 0, 0.4);
    transform: scale(1.01);
  }
  &:active {
    transform: scale(1.01) translateY(0.2rem);
  }
`;

const CardImage = styled.img`
  width: 100%;
  border-radius: 4px 4px 0px 0px;
`;

const CardSection = styled.div`
  min-height: 5.5rem;
`;

const CardTextWrapper = styled.div`
  padding: 0.8em;
  font-family: 'Lato';
  border-radius: 0 0 4px 4px;
`;

const CardTitle = styled.span`
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 1.2em;
`;

const CardDescription = styled.span`
  font-size: 0.8em;
  line-height: 1.7em;
`;

const CardButtonWrapper = styled.div`
  padding: 10px;
`;

const CardButton = styled.button`
  width: 50%;
  background-color: transparent;
  border-color: #fff;
  border-radius: 3px;

  &:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    color: #ed5565;
    border: 1px solid #ed5565;
  }

  &:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    color: #1c84c6;
    border: 1px solid #1c84c6;
  }
`;
