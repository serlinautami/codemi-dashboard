import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 280px);
  height: 100%;
  margin-left: 280px;
  padding-top: calc(64px + 32px);
  padding-left: 32px;
  padding-right: 32px;
  overflow-y: auto;
`;

const MainContent = ({ children }) => <Wrapper>{children}</Wrapper>;

MainContent.propTypes = {
  children: PropTypes.any,
};
MainContent.defaultProps = {
  children: null,
};

export default MainContent;
