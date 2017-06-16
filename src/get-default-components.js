import Layout from './containers/admin_layout';
import Preview from './containers/document_preview';
import List from './containers/list';
import Create from './containers/create';
import Edit from './containers/edit';
import Home from './containers/admin_home';

const addDeprectatedProps = components => ({
  ...components,

});

/**
 * Returns a set of default components which can be used in a
 * manul admin context.
 *
 * @export
 * @returns
 */
export default function getDefaultComponents(overwrites = {}) {
  return {
    MainLayout: undefined,
    create: Create,
    edit: Edit,
    list: List,
    preview: Preview,
    layout: Layout,
    ...overwrites,
  };
}
