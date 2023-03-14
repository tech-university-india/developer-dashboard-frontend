/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import React from 'react';
import './App.css';
import {
  Route, Routes, useNavigate
} from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { decodeToken } from 'react-jwt';
import {
  ERROR_ROUTE, HOME_ROUTE, LOGIN_ROUTE, LEADERSHIP_ROUTE, ADMIN_ROUTE, MANAGER_ROUTE,
  DEVELOPER_ROUTE
} from './constants/routes';
import Pages from './pages/index';

function App() {
  const [isloggedIn, setIsLoggedIn] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      setIsLoggedIn(true);
    } else { navigate(LOGIN_ROUTE); }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path={HOME_ROUTE}
          element={(
            <Pages.LoginPage setIsLoggedIn={setIsLoggedIn} />
)}
        />
        <Route
          path={LOGIN_ROUTE}
          element={(
            <Pages.LoginPage setIsLoggedIn={setIsLoggedIn} />
)}
        />
        { (isloggedIn) && <Route path={ADMIN_ROUTE} element={<Pages.AdminLandingPage />} />}
        { (isloggedIn) && <Route path={MANAGER_ROUTE} element={<Pages.ManagerLandingPage />} />}
        { (isloggedIn) && <Route path={DEVELOPER_ROUTE} element={<Pages.DeveloperLandingPage />} />}
        { (isloggedIn) && (
          <Route
            path={LEADERSHIP_ROUTE}
            element={<Pages.LeadershipLandingPage />}
          />
        )}
        <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<Pages.ErrorPage />} />
        <Route path="*" element={<Pages.NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
