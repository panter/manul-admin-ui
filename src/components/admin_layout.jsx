import PropTypes from 'prop-types';
import React from 'react';
import {
  Row,
  Col,
  Nav,
  NavItem,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Container,
} from 'reactstrap';
import styled from 'styled-components';
import NavLink from '../containers/nav_link';
import SideNav from '../components/side-nav';

const getNavLinks = adminConfig =>
  Object.keys(adminConfig.collections).map(collectionName => ({
    routeName: `admin.${collectionName}.list`,
    title: adminConfig.collections[collectionName].title,
  }));

const LayoutContainer = styled(Container) `
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  min-height: 100%;
  height: 100%;
`;
const FullHeightRow = styled(Row) `
  min-height: 100%;
  align-items: stretch;
`;
const NoPaddingCol = styled(Col) `
  padding-right: 0 !important;
`;
const ContentCol = styled(Col) `
  padding: 15px 30px 0 15px;
  background-color: #fff;
`;

const layoutContent = (adminConfig, content, components) => () => (
  <LayoutContainer>
    <Row>
      <Col>
        <Navbar color="faded" light toggleable>
          <NavbarToggler right />
          <NavbarBrand href="/">Manul Admin UI</NavbarBrand>
          <Collapse isOpen navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/account/">Account</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Col>
    </Row>
    <FullHeightRow>
      <NoPaddingCol md="2">
        <SideNav navItems={getNavLinks(adminConfig)} />
      </NoPaddingCol>
      <ContentCol md="10">
        {content()}
      </ContentCol>
    </FullHeightRow>
  </LayoutContainer>
);

const AdminLayout = ({
  content,
  MainLayout,
  adminConfig,
  components,
}) => {
  const adminLayout = layoutContent(adminConfig, content, components);
  return (
    MainLayout ?
      <MainLayout content={adminLayout} /> :
      <div>{adminLayout}</div>
  );
};

AdminLayout.propTypes = {
  MainLayout: PropTypes.element,
};

AdminLayout.defaultProps = {
};

AdminLayout.displayName = 'AdminLayout';

export default AdminLayout;
