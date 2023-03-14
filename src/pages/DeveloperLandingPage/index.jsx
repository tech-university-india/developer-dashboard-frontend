import React from 'react';
import LandingPageOverview from '../../components/LandingPageOverview';
import DeveloperLandingPageSummary from '../../components/DeveloperLandingPageSummary';
import Navbar from '../../components/Navbar';

function DeveloperLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <DeveloperLandingPageSummary />
      <LandingPageOverview />
    </div>
  );
}

export default DeveloperLandingPage;
