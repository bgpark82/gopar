import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import AdminPage from './component/page/AdminPage';
import ContentPage from './component/page/ContentPage';
import LoginPage from './component/page/LoginPage';
import UserPage from './component/page/UserPage';

function App() {
  return (
    <>
      <Route path="/" exact component={LoginPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/admin" component={AdminPage} />
      <Route path="/user" component={UserPage} />
      <Route path="/content" component={ContentPage} />
    </>
  );
}

export default App;
