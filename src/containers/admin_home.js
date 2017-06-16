import { useDeps, composeAll } from 'mantra-core';
import AdminHome from '../components/admin_home';
import fromContext from '../hocs/component_from_context_or';

export const depsMapper = context => ({
  context: () => context,
  adminConfig: context.adminContext.config,
});

export default fromContext('home', composeAll(
  useDeps(depsMapper),
)(AdminHome));
