'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

exports.default = getDefaultComponents;

var _admin_layout = require('./containers/admin_layout');

var _admin_layout2 = _interopRequireDefault(_admin_layout);

var _document_preview = require('./containers/document_preview');

var _document_preview2 = _interopRequireDefault(_document_preview);

var _list = require('./containers/list');

var _list2 = _interopRequireDefault(_list);

var _create = require('./containers/create');

var _create2 = _interopRequireDefault(_create);

var _edit = require('./containers/edit');

var _edit2 = _interopRequireDefault(_edit);

var _admin_home = require('./containers/admin_home');

var _admin_home2 = _interopRequireDefault(_admin_home);

var _users_edit = require('./containers/users_edit');

var _users_edit2 = _interopRequireDefault(_users_edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns a set of default components which can be used in a
 * manul admin context.
 *
 * @export
 * @returns
 */
function getDefaultComponents(overwrites) {
  return (0, _assign2.default)({}, {
    mainLayout: undefined,
    layout: _admin_layout2.default,
    list: _list2.default,
    create: _create2.default,
    preview: _document_preview2.default,
    index: _admin_home2.default,
    edit: {
      users: _users_edit2.default,
      default: _edit2.default
    }
  }, overwrites);
}
//# sourceMappingURL=get-default-components.js.map
