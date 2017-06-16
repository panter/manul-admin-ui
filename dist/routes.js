'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMounter = require('react-mounter');

var _admin_layout = require('./containers/admin_layout');

var _admin_layout2 = _interopRequireDefault(_admin_layout);

var _admin_home = require('./containers/admin_home');

var _admin_home2 = _interopRequireDefault(_admin_home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Defines an admin index route if an AdminIndex component is defined
 * (adminContext.components.index)
 */
exports.default = function (injectDeps, _ref) {
  var adminContext = _ref.adminContext;
  var adminRoutes = adminContext.adminRoutes;

  adminRoutes.route('/', {
    name: 'admin.index',
    action: function action() {
      (0, _reactMounter.mount)(injectDeps(_admin_layout2.default), {
        content: function content() {
          return _react2.default.createElement(_admin_home2.default, null);
        }
      });
    }
  });
};
//# sourceMappingURL=routes.js.map
