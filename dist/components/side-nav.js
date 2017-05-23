'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  background-color: #222d32;\n  min-height: 100%;\n  height: 100%;\n'], ['\n  background-color: #222d32;\n  min-height: 100%;\n  height: 100%;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _nav_link = require('../containers/nav_link');

var _nav_link2 = _interopRequireDefault(_nav_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getCollectionLinks = function getCollectionLinks(navItems) {
  return navItems.map(function (navItem) {
    return _react2.default.createElement(
      _reactstrap.NavItem,
      null,
      _react2.default.createElement(
        _nav_link2.default,
        { routeName: navItem.routeName },
        navItem.title
      )
    );
  });
};

var SideNavComp = function SideNavComp(_ref) {
  var navItems = _ref.navItems,
      className = _ref.className;
  return _react2.default.createElement(
    _reactstrap.Nav,
    { vertical: true, className: className },
    getCollectionLinks(navItems)
  );
};

var SideNav = (0, _styledComponents2.default)(SideNavComp)(_templateObject);

exports.default = SideNav;
//# sourceMappingURL=side-nav.js.map
