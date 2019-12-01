import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import AuthenticatedRoute from './component/auth/AuthenticatedRoute';
import AdminPage from './component/page/AdminPage';
import ContentPage from './component/page/ContentPage';
import LoginPage from './component/page/LoginPage';
import ThemeDatePage from './component/page/ThemeDatePage';
import UserPage from './component/page/UserPage';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LoginPage} />
      <Route path="/login" component={LoginPage} />
      <AuthenticatedRoute path="/admin/page" component={AdminPage} />
      <AuthenticatedRoute path="/user" component={UserPage} />
      <AuthenticatedRoute path="/content" component={ContentPage} />
      <AuthenticatedRoute path="/theme/place" component={ThemeDatePage} />
    </Switch>
  );
}

export default App;
