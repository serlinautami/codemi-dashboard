/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGem,
  faUser,
  faCertificate,
  faChartArea,
  faChartLine,
  faBullhorn,
  faStarHalfAlt,
  faEnvelope,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faUsb } from '@fortawesome/free-brands-svg-icons';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  background-color: #fff;
  height: 100%;
  z-index: 99;
  border-right: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding-top: calc(64px + 24px);
  overflow-y: auto;
`;

const MenuList = styled.ul`
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
`;

const MenuItem = styled.li`
  color: #8b8b8b;
`;

const MenuLink = styled.a`
  color: #8b8b8b;
  font-size: 18px;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  text-decoration: none;
  ${props => (props.isActive ? 'color: #63c166' : '')}
`;

const MenuItemIcon = styled(FontAwesomeIcon)`
  font-size: 12px;
  color: #8b8b8b;
  margin-right: 8px;
`;

const MenuItemText = styled.span`
  font-size: 16px;
  line-height: 1;
`;

const Menu = ({ icon, children, ...props }) => {
  if (icon) {
    return (
      <MenuLink {...props}>
        <MenuItemIcon icon={icon} />
        <MenuItemText>{children}</MenuItemText>
      </MenuLink>
    );
  }

  return <MenuLink {...props}>{children}</MenuLink>;
};

const Sidebar = () => (
  <Wrapper>
    <MenuList>
      <MenuItem>
        <Menu href="#" isActive>
          HOME
        </Menu>
      </MenuItem>
    </MenuList>

    <MenuList>
      <MenuItem>
        <Menu>LEARNING</Menu>
      </MenuItem>
      <MenuItem>
        <Menu icon={faGem}>Courses</Menu>
        <Menu icon={faUsb}>Learning Path</Menu>
      </MenuItem>
    </MenuList>

    <MenuList>
      <MenuItem>
        <Menu>MANAGE</Menu>
      </MenuItem>
      <MenuItem>
        <Menu icon={faUser}>Users</Menu>
        <Menu icon={faCertificate}>Skills</Menu>
        <Menu icon={faChartArea}>Reports</Menu>
        <Menu icon={faChartLine}>Analytics</Menu>
        <Menu icon={faBullhorn}>Announcements</Menu>
      </MenuItem>
    </MenuList>

    <MenuList>
      <MenuItem>
        <Menu>CONFIGURE</Menu>
      </MenuItem>
      <MenuItem>
        <Menu icon={faStarHalfAlt}>Points</Menu>
        <Menu icon={faCertificate}>Rewards</Menu>
        <Menu icon={faEnvelope}>Email templates</Menu>
        <Menu icon={faInfoCircle}>Company info</Menu>
        <Menu icon={faUser}>Billing</Menu>
      </MenuItem>
    </MenuList>
  </Wrapper>
);

export default Sidebar;
