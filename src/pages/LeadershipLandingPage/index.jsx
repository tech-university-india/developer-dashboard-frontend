import React from 'react';
import LandingPageOverview from '../../components/LandingPageOverview';
import LandingPageSummary from '../../components/LandingPageSummary';
import Navbar from '../../components/Navbar';

function LeadershipLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <LandingPageSummary />
      <LandingPageOverview />
    </div>
  );
}

export default LeadershipLandingPage;
