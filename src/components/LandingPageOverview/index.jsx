/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import OverviewTable from '../OverviewTable';

function LandingPageOverview() {
  return (
    <div className="flex flex-col items-center bg-[#f4f3f3]">
      <div className="flex justify-between items-center w-11/12 m-5">
        <div className="flex text-2xl font-bold">
          Project Overview
        </div>
        <button type="button" className="rounded-3xl border-2 text-sm text-[#061ae6] border-[#061ae6] hover:bg-[#3a4aeb] hover:border-[#f4f3f3] hover:text-white p-2">
          Create New Project
        </button>
      </div>
      <div className="flex w-11/12">
        <OverviewTable />
      </div>
    </div>
  );
}

export default LandingPageOverview;
