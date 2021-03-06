'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListDel = function ListDel(_ref) {
  var disabled = _ref.disabled,
      name = _ref.name,
      parent = _ref.parent,
      props = (0, _objectWithoutProperties3.default)(_ref, ['disabled', 'name', 'parent']);

  var fieldIndex = +name.slice(1 + name.lastIndexOf('.'));
  var limitNotReached = !disabled && !(parent.minCount >= parent.value.length);

  return _react2.default.createElement(
    'span',
    (0, _extends3.default)({}, (0, _filterDOMProps2.default)(props), {
      onClick: function onClick() {
        return limitNotReached && parent.onChange([].concat(parent.value.slice(0, fieldIndex)).concat(parent.value.slice(1 + fieldIndex)));
      }
    }),
    '-'
  );
};

exports.default = (0, _connectField2.default)(ListDel, { includeParent: true, initialValue: false });
//# sourceMappingURL=ListDelField.js.map