import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Loader } from '../Loader/Loader';

const SharedLayout = ({ color }) => {
  return (
    <>
      <Header color={color} />
      <Suspense fallback={<Loader color={color} />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
