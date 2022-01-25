import Layout from '../components/Layout';
import Image from 'next/image';
import { Typography } from '@mui/material';

const IndexPage = () => (
  <Layout title='North Yorkshire and beyond Landscapes'>
    <Typography
      variant='h5'
      sx={{
        fontWeight: 200,
      }}
      gutterBottom
      component='div'
    >
      Northern Landscapes
    </Typography>
    <Typography
      variant='subtitle2'
      sx={{
        fontWeight: 200,
      }}
      gutterBottom
      component='div'
    >
      Landscapes from North Yorkshire and beyond.
    </Typography>
    <Image
      src='/set1/giggleswick-scar-pen-y-ghent-background-1500.jpg'
      alt='Malham Cove from above'
      width='1500'
      height='1125'
    />
  </Layout>
);

export default IndexPage;
