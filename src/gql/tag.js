import gql from 'graphql-tag';

const GET_WORLDCUPS = gql`
  query GET_WORLDCUPS {
    worldCups {
      id
      name
      description
      img
    }
  }
`;

export default GET_WORLDCUPS;
