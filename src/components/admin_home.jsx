import React from 'react';
import ButtonGroup from './button_group';
import LinkButton from '../containers/link_button';

const getCollectionLinks = adminConfig =>
  Object.keys(adminConfig.collections).map(collectionName => (
    <LinkButton routeName={`admin.${collectionName}.list`}>
      {adminConfig.collections[collectionName].title}
    </LinkButton>
  ));

const AdminHome = ({
  adminConfig,
}) => (
  <ButtonGroup>
    {getCollectionLinks(adminConfig)}
  </ButtonGroup>
);

AdminHome.propTypes = {
};

AdminHome.defaultProps = {
};

AdminHome.displayName = 'AdminHome';

export default AdminHome;
