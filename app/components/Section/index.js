import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const SectionTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: 400;
`;

const Section = ({ title, children }) => (
  <Wrapper>
    {title && <SectionTitle>{title}</SectionTitle>}
    {children}
  </Wrapper>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
Section.defaultProps = {
  title: '',
  children: null,
};

export default Section;
