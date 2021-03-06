'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdminLayout = function AdminLayout(_ref) {
  var content = _ref.content,
      MainLayout = _ref.MainLayout;

  return MainLayout ? _react2.default.createElement(MainLayout, { content: content }) : _react2.default.createElement(
    'div',
    { 'data-hoi': 'w\xE4lt' },
    content
  );
};

AdminLayout.propTypes = {};

AdminLayout.defaultProps = {};

AdminLayout.displayName = 'AdminLayout';

exports.default = AdminLayout;
//# sourceMappingURL=admin_layout.js.map