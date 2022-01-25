import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Photo } from '../interfaces';

import styles from './ListItem.module.css';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: '230px',
}));

type Props = {
  data: Photo;
};

const ListItem = ({ data }: Props) => (
  <Item>
    <Link href='/photos/[id]' as={`/photos/${data.id}`}>
      <a className={styles.link}>
        <Image
          src={`/set1/${data.thumbnail}`}
          width='200'
          height='150'
          alt={data.title}
        />
        <Typography
          variant='subtitle2'
          gutterBottom
          component='div'
          className={styles.title}
        >
          {data.title}
        </Typography>
      </a>
    </Link>
  </Item>
);

export default ListItem;
