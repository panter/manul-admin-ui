'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addDeprectatedProps = function addDeprectatedProps(components) {
  return (0, _extends3.default)({}, components);
};

/**
 * Returns a set of default components which can be used in a
 * manul admin context.
 *
 * @export
 * @returns
 */
function getDefaultComponents() {
  var overwrites = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return (0, _extends3.default)({
    MainLayout: undefined,
    create: _create2.default,
    edit: _edit2.default,
    list: _list2.default,
    preview: _document_preview2.default,
    layout: _admin_layout2.default
  }, overwrites);
}
//# sourceMappingURL=get-default-components.js.map
