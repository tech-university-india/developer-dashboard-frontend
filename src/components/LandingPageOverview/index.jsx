/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  BODY_BGCOLOR, BUTTON_HOVER, BUTTON_PRIMARY
} from '../../constants/colors';
import OverviewTable from '../OverviewTable';

function LandingPageOverview() {
  return (
    <div className={`flex flex-col items-center bg-[${BODY_BGCOLOR}]`}>
      <div className="flex justify-between items-center w-11/12 m-5">
        <div className="flex text-2xl font-bold">
          Project Overview
        </div>
        <button type="button" className={`rounded-3xl border-2 text-sm text-[${BUTTON_PRIMARY}] border-[${BUTTON_PRIMARY}] hover:bg-[${BUTTON_HOVER}] hover:border-[${BODY_BGCOLOR}] hover:text-white p-2`}>
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
