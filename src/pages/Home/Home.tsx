import React, { Fragment } from 'react';

import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Loader,
} from '../../components';

import { useLogic } from './hooks';
import { useStyles } from './Home.styles';

export interface Repo {
  owner: string;
  repoName: string;
}

const numberFormat = new Intl.NumberFormat();

export const Home: React.FC<{
  repos: Repo[];
}> = ({ repos }) => {
  const classes = useStyles();
  const { isLoading, data } = useLogic({ repos });

  return (
    <Fragment>
      <Typography variant="h3" component="h1" className={classes.title}>
        Popular github repositories
      </Typography>
      <TableContainer className={classes.paper} component={Paper}>
        {isLoading ? (
          <Loader />
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Stars ⭐️</TableCell>
                <TableCell align="right">Forks 🍴</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, i) => {
                const cellClassName =
                  data.length - 1 === i ? classes.cell : undefined;

                return (
                  <TableRow key={item.name}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={cellClassName}
                    >
                      <a href={item.url} target="_blank" rel="noreferrer">
                        {item.name?.toUpperCase?.()}
                      </a>
                    </TableCell>
                    <TableCell align="right" className={cellClassName}>
                      {numberFormat.format(item?.stargazers?.totalCount ?? 0)}
                    </TableCell>
                    <TableCell align="right" className={cellClassName}>
                      {numberFormat.format(item?.forks?.totalCount ?? 0)}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </Fragment>
  );
};
