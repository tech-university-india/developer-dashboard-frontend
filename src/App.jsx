import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import LeadershipLandingPage from './pages/LeadershipLandingPage';
import { ERROR_ROUTE, HOME_ROUTE, ADMIN_DASHBOARD_ROUTE } from './constants/routes';
import Pages from './pages/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Pages.LeadershipLandingPage />} />
          <Route path={ADMIN_DASHBOARD_ROUTE} element={<Pages.AdminDashboard />} />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Pages.ErrorPage />} />
          <Route path="*" element={<Pages.NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
