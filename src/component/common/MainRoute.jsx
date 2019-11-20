import React from 'react';
import { Route } from 'react-router-dom';
import AdminPage from '../page/AdminPage';
import ContentPage from '../page/ContentPage';
import UserPage from '../page/UserPage';

const MainRoute = () => {
  return (
    <>
      <Route path="/admin" component={AdminPage} />
      <Route path="/user" component={UserPage} />
      <Route path="/content" component={ContentPage} />
    </>
  );
};

export default MainRoute;
