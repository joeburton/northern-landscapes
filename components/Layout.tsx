import React, { ReactNode } from 'react';

import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'Northern Landscapes' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      />
    </Head>
    <Container component='section' maxWidth='md'>
      <Grid container spacing={3} alignItems='stretch'>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  </div>
);

export default Layout;
