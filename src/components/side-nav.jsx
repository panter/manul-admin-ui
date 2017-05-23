import styled from 'styled-components';
import React from 'react';
import {
  Nav,
  NavItem,
} from 'reactstrap';
import NavLink from '../containers/nav_link';

const getCollectionLinks = navItems =>
  navItems.map(navItem => (
    <NavItem>
      <NavLink routeName={navItem.routeName}>
        {navItem.title}
      </NavLink>
    </NavItem>
  ));

const SideNavComp = ({ navItems, className }) => (
  <Nav vertical className={className}>
    {getCollectionLinks(navItems)}
  </Nav>
);

const SideNav = styled(SideNavComp)`
  background-color: #222d32;
  min-height: 100%;
  height: 100%;
`;

export default SideNav;
