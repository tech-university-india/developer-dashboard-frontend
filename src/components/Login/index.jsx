/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */

import React from 'react';
import { useNavigate } from 'react-router-dom';
import makeRequest from '../../utils/makeRequest';
import { AUTHENTICATE_USER } from '../../constants/apiEndpoints';
import { ERROR_ROUTE } from '../../constants/routes';

export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userData = await makeRequest(
        AUTHENTICATE_USER,
        navigate,
        { data: { username, password } }
      );
      if (userData.role === 'admin') { navigate('/admin'); }
      if (userData.role === 'leadership') { navigate('/leadership'); }
      if (userData.role === 'manager') { navigate('/manager'); }
      if (userData.role === 'developer') { navigate('/developer'); }
    } catch (e) {
      if (e.response?.status === 400) {
        alert('Invalid id or password.');
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
          <input className="mx-4 py-1 bg-gray-200 rounded-xl" type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label className="shadow-xl py-2 bg-white flex flex-col mt-5 mx-9 rounded-xl">
          <p className="mx-4">Password</p>
          <input className="mx-4 bg-gray-200 rounded-xl py-1" type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <input className="shadow-xl bg-blue-200 mt-5 mx-9 rounded-xl py-3" type="submit" value="Login" />
      </form>
    </div>
  );
}
