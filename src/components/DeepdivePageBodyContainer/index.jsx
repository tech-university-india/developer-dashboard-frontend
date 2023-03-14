/* eslint-disable react/prop-types */
import React from 'react';

function DeepdivePageBodyContainer({ children }) {
  return (
    <div className="bg-gray-200 p-6 flex flex-row flex-wrap justify-around px-40 gap-20">
      {children}
    </div>
  );
}

export default DeepdivePageBodyContainer;
