import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import LeadershipLandingPage from './pages/LeadershipLandingPage';
import {
  ERROR_ROUTE, HOME_ROUTE, LOGIN_ROUTE, LEADERSHIP_ROUTE, ADMIN_ROUTE, MANAGER_ROUTE,
  DEVELOPER_ROUTE
} from './constants/routes';
import Pages from './pages/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Pages.LoginPage />} />
          <Route path={LOGIN_ROUTE} element={<Pages.LoginPage />} />
          <Route path={ADMIN_ROUTE} element={<Pages.AdminLandingPage />} />
          <Route path={MANAGER_ROUTE} element={<Pages.ManagerLandingPage />} />
          <Route path={DEVELOPER_ROUTE} element={<Pages.DeveloperLandingPage />} />
          <Route path={LEADERSHIP_ROUTE} element={<Pages.LeadershipLandingPage />} />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Pages.ErrorPage />} />
          <Route path="*" element={<Pages.NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
