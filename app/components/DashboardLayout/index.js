import React from 'react';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';
import Sidebar from '../Sidebar';
import MainContent from '../MainContent';
import Section from '../Section';

const DashboardLayout = ({ title, children }) => (
  <React.Fragment>
    <NavBar />
    <Sidebar />
    <MainContent>
      <Section title={title}>{children}</Section>
    </MainContent>
  </React.Fragment>
);

DashboardLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
DashboardLayout.defaultProps = {
  title: '',
  children: null,
};

export default DashboardLayout;
