'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n    border: none;\n    width: 100%;\n    font-size: 13px;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 3px;\n    padding: 7px;\n    margin-top: 4px;\n    margin-bottom: 4px;\n'], ['\n    border: none;\n    width: 100%;\n    font-size: 13px;\n    border-width: 1px;\n    border-style: solid;\n    border-radius: 3px;\n    padding: 7px;\n    margin-top: 4px;\n    margin-bottom: 4px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextInput = _styledComponents2.default.input(_templateObject);
var Text = function Text(_ref) {
  var disabled = _ref.disabled,
      id = _ref.id,
      inputRef = _ref.inputRef,
      label = _ref.label,
      name = _ref.name,
      _onChange = _ref.onChange,
      placeholder = _ref.placeholder,
      type = _ref.type,
      value = _ref.value,
      props = (0, _objectWithoutProperties3.default)(_ref, ['disabled', 'id', 'inputRef', 'label', 'name', 'onChange', 'placeholder', 'type', 'value']);
  return _react2.default.createElement(
    'div',
    (0, _filterDOMProps2.default)(props),
    label && _react2.default.createElement(
      'label',
      { htmlFor: id },
      label
    ),
    _react2.default.createElement(TextInput, {
      disabled: disabled,
      id: id,
      name: name,
      onChange: function onChange(event) {
        return _onChange(event.target.value);
      },
      placeholder: placeholder,
      ref: inputRef,
      type: type,
      value: value
    })
  );
};

Text.defaultProps = {
  type: 'text'
};

exports.default = (0, _connectField2.default)(Text);
//# sourceMappingURL=TextField.js.map
