'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  padding: 10px;\n  margin: 10px;\n  border-radius: 4px;\n  background-color: white;\n  border-style: solid;\n  border-width: 2px;\n  border-color: black;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n'], ['\n  padding: 10px;\n  margin: 10px;\n  border-radius: 4px;\n  background-color: white;\n  border-style: solid;\n  border-width: 2px;\n  border-color: black;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var C = function C(_ref) {
  var href = _ref.href,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      label = _ref.label,
      onClick = _ref.onClick,
      type = _ref.type,
      testId = _ref.testId;

  var Tag = href ? 'a' : 'button';
  return _react2.default.createElement(
    Tag,
    {
      className: className,
      style: style,
      href: href,
      onClick: onClick,
      type: type,
      'data-testId': testId
    },
    children || label
  );
};

var Button = (0, _styledComponents2.default)(C)(_templateObject);

Button.propTypes = {};

Button.defaultProps = {};

Button.displayName = 'Button';

exports.default = Button;
//# sourceMappingURL=button.js.map
