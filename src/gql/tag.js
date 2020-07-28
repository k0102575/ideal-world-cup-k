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

export const ADD_WORLDCUP = gql`
  mutation ADD_WORLDCUP($id: Int!, $name: String!, $description: String!) {
    create_worldcup(id: $id, name: $name, description: $description)
  }
`;
