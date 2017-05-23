'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _manulI18n = require('@panter/manul-i18n');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button_group = require('../button_group');

var _button_group2 = _interopRequireDefault(_button_group);

var _SubmitField = require('../fields//SubmitField');

var _SubmitField2 = _interopRequireDefault(_SubmitField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormActions = function FormActions(_ref) {
  var submitLabel = _ref.submitLabel,
      children = _ref.children;
  return _react2.default.createElement(
    _button_group2.default,
    null,
    children,
    _react2.default.createElement(_SubmitField2.default, { label: submitLabel })
  );
};

FormActions.displayName = 'FormActions';

FormActions.defaultProps = {
  submitLabel: _react2.default.createElement(
    _manulI18n.T,
    null,
    'autoform.defaults.submit'
  )
};

exports.default = FormActions;
//# sourceMappingURL=FormActions.js.map
