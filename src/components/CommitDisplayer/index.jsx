import {React, useEffect} from 'react';

function CommitDisplayer() {
  useEffect(() => {
    makeRequest();
  }, []);
  
  return (
    <div className="m-3 w-48">
      <div className="mt-4 text-xs left-5 top-1 flex justify-end">
        <p className="border-2 border-gray-400 rounded-md px-1">
          <span className="font-bold">20</span>
          {' '}
          Team Commit Count
        </p>
      </div>
      <div className="flex flex-col justify-start">
        <p className="text-4xl font-bold">12</p>
        <p className="text-sm text-gray-400">Commit Count</p>
      </div>

    </div>
  );
}

export default CommitDisplayer;
