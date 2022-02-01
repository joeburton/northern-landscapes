import { GetStaticProps } from 'next';

import { Photo } from '../../interfaces';
import { photosData } from '../../utils/photos-db';
import Layout from '../../components/Layout';
import List from '../../components/List';

type Props = {
  images: Photo[];
};

const WithStaticProps = ({ images }: Props) => (
  <Layout title='North Yorkshire, Craven and beyond Landscapes - Photography'>
    <List images={images} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const images: Photo[] = photosData;
  return { props: { images } };
};

export default WithStaticProps;
