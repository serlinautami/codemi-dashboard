import React from 'react';
import styled from 'styled-components';
import icBell from '../../images/ic-bell.svg';

const NotifCounter = styled.div`
  position: absolute;
  background-color: red;
  border-radius: 4px;
  color: #fff;
  top: -8px;
  right: -8px;
  font-size: 11px;
  padding: 2px 4px;
`;

const NotifWrapper = styled.div`
  position: relative;
  margin-right: 24px;
`;

const NotifIcon = styled.img`
  width: 24px;
`;

const Notif = () => (
  <NotifWrapper>
    <NotifCounter>18</NotifCounter>
    <NotifIcon src={icBell} alt="" title="" />
  </NotifWrapper>
);

export default Notif;
