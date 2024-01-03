import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';

const Index = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle('Admin | Dashboard'));
  });

  return (
    <>
      <h1>Dashboard</h1>
    </>
  );
};

export default Index;
