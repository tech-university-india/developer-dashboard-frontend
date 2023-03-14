import { React, useState } from 'react';

function CostDisplayer({ setCostTable, costTable}) {
  const [showSupplementaryCostTable, setShowSupplementaryCostTable] = useState(false);

  const handleClick = () => {
    setCostTable(!costTable)
  };
  return (
    <div className="relative justify-center self-center">
      <div className="flex flex-col bg-white mx-4 my-3 p-3 rounded-2xl">
        <p>
          {' '}
          <span className="font-bold text-2xl">₹ 2,23,440</span>
          {' '}
          <span className="text-gray-400 text-xl">(2,20,000 + 3,440)</span>
        </p>
        <p className="text-xs text-gray-400">
          Total cost (Personal Cost +
          {' '}
          <button className="text-blue-700" type="button" onClick={handleClick}>Supplementary Cost</button>
          )
          {' '}
        </p>
      </div>
    </div>
  );
}

export default CostDisplayer;
