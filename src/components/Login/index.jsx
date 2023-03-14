/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { decodeToken } from 'react-jwt';
import makeRequest from '../../utils/makeRequest';
import { AUTHENTICATE_USER } from '../../constants/apiEndpoints';
import { ERROR_ROUTE } from '../../constants/routes';

export default function Login({ setIsLoggedIn }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const notify = () => toast.error('Invalid Id or Password', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light'
  });

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await makeRequest(
        AUTHENTICATE_USER,
        navigate,
        { data: { username, password } }
      );
      const decodedToken = decodeToken(res.accessToken);
      localStorage.setItem('accessToken', res.accessToken);
      for (const [key, value] of Object.entries(decodedToken)) {
        localStorage.setItem(`${key}`, `${value}`);
      }
      setIsLoggedIn(true);

      if (decodedToken.role === 'admin') { navigate('/admin'); }
      if (decodedToken.role === 'leadership') { navigate('/leadership'); }
      if (decodeToken.role === 'manager') { navigate('/manager'); }
      if (decodedToken.role === 'developer') { navigate('/developer'); }
    } catch (e) {
      if (e.response?.status === 400) {
        notify();
      } else if (e.response?.status) {
        navigate(`${ERROR_ROUTE}/${e.response.status}`);
      } else {
        navigate(ERROR_ROUTE);
      }
      return null;
    }
    return true;
  };

  return (

    <div className="h-1/2 w-96 bg-blue-50 shadow-2xl rounded-3xl flex flex-col justify-center">
      <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
        <label className="shadow-xl py-2 bg-white flex flex-col mx-9 rounded-xl">
          <p className="mx-4">Username</p>
          <input data-testid="usernameInput" className="mx-4 py-1 bg-gray-200 rounded-xl" type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label className="shadow-xl py-2 bg-white flex flex-col mt-5 mx-9 rounded-xl">
          <p className="mx-4">Password</p>
          <input data-testid="passwordInput" className="mx-4 bg-gray-200 rounded-xl py-1" type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <input data-testid="submitButton" className="shadow-xl bg-blue-200 mt-5 mx-9 rounded-xl py-3" type="submit" value="Login" />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    </div>
  );
}
