'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button_group = require('./button_group');

var _button_group2 = _interopRequireDefault(_button_group);

var _link_button = require('../containers/link_button');

var _link_button2 = _interopRequireDefault(_link_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCollectionLinks = function getCollectionLinks(adminConfig) {
  return (0, _keys2.default)(adminConfig.collections).map(function (collectionName) {
    return _react2.default.createElement(
      _link_button2.default,
      { routeName: 'admin.' + collectionName + '.list' },
      adminConfig.collections[collectionName].title
    );
  });
};

var AdminHome = function AdminHome(_ref) {
  var adminConfig = _ref.adminConfig;
  return _react2.default.createElement(
    _button_group2.default,
    null,
    getCollectionLinks(adminConfig)
  );
};

AdminHome.propTypes = {};

AdminHome.defaultProps = {};

AdminHome.displayName = 'AdminHome';

exports.default = AdminHome;
//# sourceMappingURL=admin_home.js.map