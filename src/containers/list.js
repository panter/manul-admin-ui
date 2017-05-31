import { useDeps, composeAll } from 'mantra-core';
import List from '../components/list';


export const depsMapper = (context, actions) => ({
  context: () => context,
  downloadCsv: actions.manulAdmin.downloadCsv,
});

export default composeAll(
  useDeps(depsMapper),
)(List);
