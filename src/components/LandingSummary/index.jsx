import React from 'react';

function LandingSummary() {
  return (
    <div className="flex h-52">
      <div className="flex flex-1 items-center bg-[#f4f3f3] m-6">
        <div className="flex items-center justify-center basis-1/5 h-28 rounded-2xl border-2 border-black mx-4">
          no of ongoing projects
        </div>
        <div className="flex items-center justify-center basis-1/5 h-28 rounded-2xl border-2 border-black mx-4">
          no of people staffed
        </div>
        <div className="flex items-center justify-center basis-2/5 h-28 rounded-2xl border-2 border-black mx-4">
          git contribution heatmap
        </div>
        <div className="flex items-center justify-center basis-1/5 h-32 rounded-2xl border-2 border-black mx-4">
          pulse check graph
        </div>
      </div>
    </div>
  );
}

export default LandingSummary;
