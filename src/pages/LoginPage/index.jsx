/* eslint-disable react/prop-types */
import React from 'react';
import Login from '../../components/Login';
import Navbar from '../../components/Navbar';

export default function LoginPage({ setIsLoggedIn }) {
  return (
    <div>
      <Navbar nameOfUser="-" />
      <div className="h-screen flex flex-col justify-center items-center">
        <Login setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
}
