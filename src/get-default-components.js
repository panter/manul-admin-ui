import AdminLayout from './containers/admin_layout';
import AdminPreview from './containers/document_preview';
import AdminList from './containers/list';
import AdminCreate from './containers/create';
import AdminEdit from './containers/edit';
import AdminHome from './containers/admin_home';
import UsersEdit from './containers/users_edit';

/**
 * Returns a set of default components which can be used in a
 * manul admin context.
 *
 * @export
 * @returns
 */
export default function getDefaultComponents(overwrites) {
  return Object.assign({}, {
    mainLayout: undefined,
    layout: AdminLayout,
    list: AdminList,
    create: AdminCreate,
    preview: AdminPreview,
    index: AdminHome,
    edit: {
      users: UsersEdit,
      default: AdminEdit,
    },
  }, overwrites);
}
