import React from 'react';

const Card = (props) => {
  const { id, name, description, img } = props;

  return (
    <div>
      <img src={require('assets/' + img)} />
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

export default Card;
