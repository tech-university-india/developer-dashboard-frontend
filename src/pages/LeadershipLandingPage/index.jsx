import React from 'react';
import LandingPageOverview from '../../components/LandingPageOverview';
import LeadershipLandingPageSummary from '../../components/LeadershipLandingPageSummary';
import Navbar from '../../components/Navbar';

function LeadershipLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <LeadershipLandingPageSummary />
      <LandingPageOverview />
    </div>
  );
}

export default LeadershipLandingPage;
