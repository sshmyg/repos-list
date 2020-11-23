import { gql } from '@apollo/client';

export const GET_REPO = gql`
  query($owner: String!, $repoName: String!) {
    repository(owner: $owner, name: $repoName) {
      name
      url
      stargazers {
        totalCount
      }
      forks {
        totalCount
      }
    }
  }
`;
