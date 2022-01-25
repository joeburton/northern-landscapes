import { Typography } from '@mui/material';

import Layout from '../components/Layout';

const AboutPage = () => (
  <Layout title='North Yorkshire and beyond Landscapes'>
    <Typography
      variant='h5'
      sx={{
        fontWeight: 200,
      }}
      gutterBottom
      component='div'
    >
      About
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
  </Layout>
);

export default AboutPage;
