import React from 'react';
import { ApolloProvider } from '@apollo/client';

import { client } from '@/server';

export const Apollo: React.FC<{}> = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
