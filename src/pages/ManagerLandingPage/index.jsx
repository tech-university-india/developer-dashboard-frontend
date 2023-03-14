import React from 'react';
import LandingPageOverview from '../../components/LandingPageOverview';
import ManagerLandingPageSummary from '../../components/ManagerLandingPageSummary';
import Navbar from '../../components/Navbar';

function ManagerLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <ManagerLandingPageSummary />
      <LandingPageOverview />
    </div>
  );
}

export default ManagerLandingPage;
