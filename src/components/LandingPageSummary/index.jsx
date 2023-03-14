import React from 'react';

function LandingPageSummary() {
  return (
    <div className="flex h-60 my-2">
      <div className="flex flex-1 items-center bg-[#f4f3f3] m-6">
        <div className="flex items-center justify-center basis-2/12 h-28 rounded-2xl border-2 border-black mx-4">
          no of ongoing projects
        </div>
        <div className="flex items-center justify-center basis-2/12 h-28 rounded-2xl border-2 border-black mx-4">
          no of people staffed
        </div>
        <div className="flex items-center justify-center basis-5/12 h-28 rounded-2xl border-2 border-black mx-4">
          git contribution heatmap
        </div>
        <div className="flex items-center justify-center basis-3/12 h-44 rounded-2xl border-2 border-black mx-4">
          pulse check graph
        </div>
      </div>
    </div>
  );
}

export default LandingPageSummary;
