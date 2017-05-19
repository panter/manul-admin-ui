'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultComponents = exports.defaultContainers = exports.getDefaultComponents = exports.module = undefined;

var _adminUiModule = require('./admin-ui-module');

var _adminUiModule2 = _interopRequireDefault(_adminUiModule);

var _getDefaultComponents = require('./get-default-components');

var _getDefaultComponents2 = _interopRequireDefault(_getDefaultComponents);

var _components = require('./components');

var defaultComponents = _interopRequireWildcard(_components);

var _containers = require('./containers');

var defaultContainers = _interopRequireWildcard(_containers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.module = _adminUiModule2.default;
exports.getDefaultComponents = _getDefaultComponents2.default;
exports.defaultContainers = defaultContainers;
exports.defaultComponents = defaultComponents;
//# sourceMappingURL=manul-admin-ui.js.map