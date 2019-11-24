import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AdminPage from './component/page/AdminPage';
import ContentPage from './component/page/ContentPage';
import LoginPage from './component/page/LoginPage';
import ThemeDatePage from './component/page/ThemeDatePage';
import UserPage from './component/page/UserPage';

function App() {
  return (
    <>
      <Route path="/" exact component={LoginPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/admin/page" component={AdminPage} />
      <Route path="/user" component={UserPage} />
      <Route path="/content" component={ContentPage} />
      <Route path="/theme/place" component={ThemeDatePage} />
    </>
  );
}

export default App;
