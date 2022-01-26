import { GetStaticProps, GetStaticPaths } from 'next';

import { Photo } from '../../interfaces';
import { photosData } from '../../utils/photos-db';
import Layout from '../../components/Layout';
import PhotoDetail from '../../components/PhotoDetail';

type Props = {
  photo?: Photo;
  errors?: string;
};

const StaticPropsDetail = ({ photo, errors }: Props) => {
  if (errors) {
    return (
      <Layout title='Northern Landscapes - Sorry something went wrong!'>
        <p>
          <span className='error'>Error:</span> {errors}
        </p>
      </Layout>
    );
  }
  const metaTitle = `North Yorkshire and beyond Landscapes, ${photo.title}`;
  return (
    <Layout title={`North Yorkshire and beyond Landscapes, ${photo.title}`}>
      {photo && <PhotoDetail photo={photo} />}
    </Layout>
  );
};

export default StaticPropsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = photosData.map((user) => ({
    params: { id: user.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id;
    const photo = photosData.find((data) => data.id === Number(id));
    // By returning { props: photo }, the StaticPropsDetail component
    // will receive `photo` as a prop at build time
    return { props: { photo } };
  } catch (err: any) {
    return { props: { errors: err.message } };
  }
};
