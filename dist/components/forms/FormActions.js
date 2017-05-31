'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _manulI18n = require('@panter/manul-i18n');

var _reactstrap = require('reactstrap');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SubmitField = require('uniforms-bootstrap4/SubmitField');

var _SubmitField2 = _interopRequireDefault(_SubmitField);

var _ControlGroup = require('../fields/ControlGroup');

var _ControlGroup2 = _interopRequireDefault(_ControlGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormActions = function FormActions(_ref) {
  var submitLabel = _ref.submitLabel,
      children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['submitLabel', 'children']);
  return _react2.default.createElement(
    _ControlGroup2.default,
    null,
    children,
    _react2.default.createElement(_SubmitField2.default, (0, _extends3.default)({ value: submitLabel }, props))
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
