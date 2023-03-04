import React from 'react';
import LandingSummary from '../../components/LandingSummary';
import Navbar from '../../components/Navbar';

function LeadershipLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <LandingSummary />
    </div>
  );
}

export default LeadershipLandingPage;
