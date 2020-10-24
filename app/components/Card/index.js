/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export const CardWrapper = styled.div`
  ${props =>
    props.color === 'blue'
      ? `background-color: #4185f4; color: #fff;`
      : 'background-color: #fff;'}
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const CardBody = styled.div`
  padding: 16px;
`;

const Card = ({ children, color }) => (
  <CardWrapper color={color}>{children}</CardWrapper>
);

export default Card;
