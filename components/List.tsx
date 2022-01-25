import * as React from 'react';
import ListItem from './ListItem';
import { Photo } from '../interfaces';
import Grid from '@mui/material/Grid';

type Props = {
  items: Photo[];
};

import styles from './List.module.css';

const List = ({ items }: Props) => (
  <Grid container alignItems='stretch' className={styles.photosList}>
    {items.map((item) => (
      <Grid
        item
        xs={6}
        sm={4}
        md={3}
        key={item.id}
        sx={{
          marginBottom: 2,
          paddingRight: 2,
          paddingLeft: 1,
          textAlign: 'left',
        }}
      >
        <ListItem data={item} />
      </Grid>
    ))}
  </Grid>
);

export default List;
