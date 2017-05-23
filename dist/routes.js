'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactMounter = require('react-mounter');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Defines an admin index route if an AdminIndex component is defined
 * (adminContext.components.index)
 */
exports.default = function (injectDeps, _ref) {
  var adminContext = _ref.adminContext;
  var adminRoutes = adminContext.adminRoutes,
      components = adminContext.components;

  if (typeof components.index !== 'undefined') {
    adminRoutes.route('/', {
      name: 'admin.index',
      action: function action() {
        (0, _reactMounter.mount)(injectDeps(components.layout), {
          content: function content() {
            return _react2.default.createElement(components.index, null);
          }
        });
      }
    });
  }
};
//# sourceMappingURL=routes.js.map
