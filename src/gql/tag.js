import gql from 'graphql-tag';

export const GET_WORLDCUPS = gql`
  query GET_WORLDCUPS {
    worldCups {
      id
      name
      description
      img
    }
  }
`;

export const GET_WORLDCUP = gql`
  query GET_WORLDCUP($id: Int!) {
    worldCup(id: $id) {
      id
      name
      description
      img
    }
  }
`;
