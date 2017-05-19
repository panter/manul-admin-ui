'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdminLayout = function AdminLayout(_ref) {
  var content = _ref.content,
      MainLayout = _ref.MainLayout;
  return MainLayout ? _react2.default.createElement(MainLayout, { content: content }) : _react2.default.createElement(
    'div',
    null,
    content
  );
};

AdminLayout.propTypes = {
  MainLayout: _propTypes2.default.element
};

AdminLayout.defaultProps = {};

AdminLayout.displayName = 'AdminLayout';

exports.default = AdminLayout;
//# sourceMappingURL=admin_layout.js.map