import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Notif from '../Notif';
import imgLogo from '../../images/img-logo.png';

const NavWrapper = styled.nav`
  position: fixed;
  background-color: #fff;
  height: 64px;
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 9999;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  width: 100%;
  max-width: 120px;
`;

const UserPhoto = styled.div`
  background-image: url('https://images.glints.com/unsafe/160x0/glints-dashboard.s3.amazonaws.com/profile-picture/c47dfeb9b4831d7a4e325cbae471c582.jpeg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #eee;
  width: 50px;
  border-radius: 50px;
  height: 50px;
  display: inline-block;
`;

const NavAction = styled.div`
  display: flex;
  align-items: center;
`;

const Dropdown = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownIcon = styled(FontAwesomeIcon)`
  font-size: 18px;
  color: #cdcdcd;
  margin-left: 8px;
`;

const NavBar = () => (
  <NavWrapper>
    <div>
      <Logo src={imgLogo} title="Codemi" alt="Codemi" />
    </div>
    <NavAction>
      <Notif />
      <Dropdown>
        <UserPhoto />
        <DropdownIcon icon={faChevronDown} />
      </Dropdown>
    </NavAction>
  </NavWrapper>
);

export default React.memo(NavBar);
