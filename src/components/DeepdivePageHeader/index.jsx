/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import { React, useState } from 'react';
import { FaEdit } from 'react-icons/fa';

function DeepdivePageHeader({ children }) {
  const [developer, setDeveloper] = useState(true);

  function handle() {
    setDeveloper(!developer);
  }

  return (
    <div className="flex flex-row justify-between bg-slate-100 mx-12 my-7 relative">
      <div className="flex flex-col mx-4 mb-3">
        <div className="text-4xl mt-7 font-bold flex flex-row justify justify-between">
          Developer Dashboard
          <div className="ml-5"> {developer && <button type="button"><FaEdit style={{ color: 'blue' }} /></button>} </div>
        </div>
        <p className="text-xs text-blue-700">Sprint 2</p>
      </div>
      {children}
    </div>

  );
}

export default DeepdivePageHeader;
