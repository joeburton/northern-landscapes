import { GetStaticProps } from 'next';

import { Photo } from '../../interfaces';
import { photosData } from '../../utils/photos-db';
import Layout from '../../components/Layout';
import List from '../../components/List';

type Props = {
  items: Photo[];
};

const WithStaticProps = ({ items }: Props) => (
  <Layout title='North Yorkshire and beyond Landscapes - Photography'>
    <List items={items} />
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: Photo[] = photosData;
  return { props: { items } };
};

export default WithStaticProps;
