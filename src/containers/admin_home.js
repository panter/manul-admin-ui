import { useDeps, composeAll } from 'mantra-core';
import AdminHome from '../components/admin_home';

export const depsMapper = context => ({
  context: () => context,
  adminConfig: context.adminContext.config,
});

export default composeAll(
  useDeps(depsMapper),
)(AdminHome);
