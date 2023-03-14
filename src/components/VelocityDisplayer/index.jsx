import React from 'react';

function VelocityDisplayer() {
  
  return (
    <div className="m-3 w-36">
      <div className="mt-4 text-xs left-5 top-1 flex justify-end">
        <p className="border-2 border-gray-400 rounded-md px-1">
          <span className="font-bold">20</span>
          {' '}
          Team Velocity
        </p>
      </div>
      <div className="flex flex-col justify-start">
        <p className="text-4xl font-bold">15</p>
        <p className="text-sm text-gray-400">Velocity</p>
      </div>

    </div>
  );
}

export default VelocityDisplayer;
