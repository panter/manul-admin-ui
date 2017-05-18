import PropTypes from 'prop-types';
import React from 'react';

const AdminLayout = ({
  content,
  MainLayout,
}) => (
    MainLayout ?
      <MainLayout content={content} /> :
      <div>{content}</div>
  );

AdminLayout.propTypes = {
  MainLayout: PropTypes.element,
};

AdminLayout.defaultProps = {
};

AdminLayout.displayName = 'AdminLayout';

export default AdminLayout;
