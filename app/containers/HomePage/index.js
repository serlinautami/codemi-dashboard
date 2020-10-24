/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SectionUser from '../../components/SectionUser';

export default function HomePage() {
  return (
    <React.Fragment>
      <DashboardLayout title="Codemi Home">
        <SectionUser />
      </DashboardLayout>
    </React.Fragment>
  );
}
