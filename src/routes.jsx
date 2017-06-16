import React from 'react';
import { mount } from 'react-mounter';
import Layout from './containers/admin_layout';
import Home from './containers/admin_home';

/**
 * Defines an admin index route if an AdminIndex component is defined
 * (adminContext.components.index)
 */
export default (injectDeps, { adminContext }) => {
  const { adminRoutes } = adminContext;
  adminRoutes.route('/', {
    name: 'admin.index',
    action() {
      mount(injectDeps(Layout), {
        content: () => (
          <Home />
        ),
      });
    },
  });
};
