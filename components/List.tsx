import React, { useState } from 'react';
import ListItem from './ListItem';
import { Photo } from '../interfaces';
import Grid from '@mui/material/Grid';
import FilterImages from './FilterImages';

type ImagesArray = {
  images: Photo[];
};

import styles from './List.module.css';

const List = ({ images }: ImagesArray) => {
  const [imageArray, setImageArray] = useState<Photo[]>(images);

  return (
    <Grid container>
      <Grid item xs={12}>
        <FilterImages setImageArray={setImageArray} images={images} />
      </Grid>
      <Grid item xs={12}>
        <Grid container className={styles.photosList}>
          {imageArray.map((image) => (
            <Grid
              item
              xs={6}
              sm={4}
              md={3}
              key={image.id}
              sx={{
                marginTop: 2,
                marginBottom: 1,
                paddingLeft: 1,
                paddingRight: 1,
                textAlign: 'left',
              }}
            >
              <ListItem data={image} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default List;
