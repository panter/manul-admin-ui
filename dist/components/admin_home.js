'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectDestructuringEmpty2 = require('babel-runtime/helpers/objectDestructuringEmpty');

var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button_group = require('../../core/components/button_group');

var _button_group2 = _interopRequireDefault(_button_group);

var _link_button = require('../../core/containers/link_button');

var _link_button2 = _interopRequireDefault(_link_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdminHome = function AdminHome(_ref) {
  (0, _objectDestructuringEmpty3.default)(_ref);
  return _react2.default.createElement(
    _button_group2.default,
    null,
    _react2.default.createElement(
      _link_button2.default,
      { routeName: 'admin.translations.list' },
      'Translations'
    )
  );
};

AdminHome.propTypes = {};

AdminHome.defaultProps = {};

AdminHome.displayName = 'AdminHome';

exports.default = AdminHome;
//# sourceMappingURL=admin_home.js.map