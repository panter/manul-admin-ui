'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var load = function load(_ref) {
  var adminContext = _ref.adminContext;

  if (!adminContext) {
    throw new Error('Please provide a adminContext-object in your mantra-context. use createAdminContext for that');
  }
};

exports.default = { routes: _routes2.default, load: load };
//# sourceMappingURL=admin-ui-module.js.map