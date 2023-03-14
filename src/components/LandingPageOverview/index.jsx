/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import OverviewTable from '../OverviewTable';

function LandingPageOverview() {
  return (
    <div className="flex flex-1 flex-col items-center bg-body-bg">
      <div className="flex justify-between items-center w-11/12 m-5">
        <div className="flex text-2xl font-bold">
          Project Overview
        </div>
        <button type="button" className="rounded-3xl border-2 text-sm text-button-primary border-button-primary hover:bg-button-hover hover:border-body-bg hover:text-white p-2">
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
