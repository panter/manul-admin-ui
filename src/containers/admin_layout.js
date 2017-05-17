import { useDeps, composeAll, composeWithTracker } from 'mantra-core';
import AdminLayout from '../components/admin_layout';
import restrictToRoles from '../hocs/restrict_to_roles';
import NotAllowed from '../components/not_allowed';

export const composer = ({ context }, onData) => {
  onData(null, {});
};

export const depsMapper = context => ({
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  // restrictToRoles('admin', () => NotAllowed),
  useDeps(depsMapper),
)(AdminLayout);
