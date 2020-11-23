import { useEffect, useCallback, useState } from 'react';

import { GET_REPO } from '@/server/queries';
import { client } from '@/server';

import { Repo } from '../Home';

interface RepoDetails {
  name: string;
  url: string;
  forks: {
    totalCount: number;
  };
  stargazers: {
    totalCount: number;
  };
}

interface Props {
  repos: Repo[];
}

export const useLogic = (props: Props = { repos: [] }) => {
  const { repos } = props;
  const [state, setState] = useState<{
    isLoading: boolean;
    data: RepoDetails[];
  }>({
    isLoading: false,
    data: [],
  });

  const makeRequest = useCallback(async () => {
    const commonRes: RepoDetails[] = [];

    setState((s) => ({
      ...s,
      isLoading: true,
    }));

    for (const item of repos) {
      try {
        const res = await client.query({
          query: GET_REPO,
          variables: item,
        });

        commonRes.push(res?.data?.repository);
      } catch (error) {
        console.error(error);
      }
    }

    setState({
      data: commonRes,
      isLoading: false,
    });
  }, [repos]);

  useEffect(() => {
    makeRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};
