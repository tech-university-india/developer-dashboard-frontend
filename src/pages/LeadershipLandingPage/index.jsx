import React from 'react';
import LeadershipSummary from '../../components/LeadershipSummary';
import Navbar from '../../components/Navbar';

function LeadershipLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <LeadershipSummary />
    </div>
  );
}

export default LeadershipLandingPage;
