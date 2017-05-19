import React from 'react';
import { mount } from 'react-mounter';

/**
 * Defines an admin index route if an AdminIndex component is defined
 * (adminContext.components.index)
 */
export default (injectDeps, { adminContext }) => {
  const { adminRoutes, components } = adminContext;
  if (typeof components.index !== 'undefined') {
    adminRoutes.route('/', {
      name: 'admin.index',
      action() {
        mount(injectDeps(components.layout), {
          content: () => (
            <components.index />
          ),
        });
      },
    });
  }
};
