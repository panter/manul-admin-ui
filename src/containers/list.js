import { useDeps, composeAll } from 'mantra-core';
import List from '../components/list';


export const depsMapper = (context, actions) => ({
  context: () => context,
  downloadCsv: actions.manulAdmin.downloadCsv,

  MeteorGriddle: context.MeteorGriddle,
});

export default composeAll(
  useDeps(depsMapper),
)(List);
