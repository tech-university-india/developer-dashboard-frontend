/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';

function Navbar() {
  return (
    <div className="flex items-center w-full bg-black">
      <div className="flex-1 text-white p-3 pl-5">
        Project Management
        {' '}
        <br />
        {' '}
        Dashboard
      </div>
      <div className="flex flex-row text-white p-3 pr-12">
        <FaUserCircle className="w-8 h-8 mr-2" />
        <div className="flex items-center">Jane Doe</div>
        <RiArrowDropDownLine className="w-8 h-8" />
      </div>
    </div>
  );
}

export default Navbar;
