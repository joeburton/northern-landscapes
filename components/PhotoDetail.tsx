import * as React from 'react';

import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { Photo } from '../interfaces';

type PhotoDetailProps = {
  photo: Photo;
};

const PhotoDetail = ({ photo: photo }: PhotoDetailProps) => (
  <div>
    <Typography
      variant='h6'
      sx={{
        fontWeight: 200,
        color: 'rgb(107, 107, 107)',
      }}
      gutterBottom
      component='div'
    >
      {photo.title}
    </Typography>
    <Image
      src={`/set1/${photo.image}`}
      width='1500'
      height='1125'
      alt={photo.title}
    />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100px',
      }}
    ></div>
  </div>
);

export default PhotoDetail;
