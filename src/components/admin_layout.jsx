import React from 'react';

const AdminLayout = ({
  content,
  adminContext: { components: { mainLayout } },
}) => (
  mainLayout ?
    <mainLayout content={content} /> :
    <div>{content}</div>
);

AdminLayout.propTypes = {
};

AdminLayout.defaultProps = {
};

AdminLayout.displayName = 'AdminLayout';

export default AdminLayout;
