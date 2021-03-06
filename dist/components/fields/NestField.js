'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _filterDOMProps = require('uniforms/filterDOMProps');

var _filterDOMProps2 = _interopRequireDefault(_filterDOMProps);

var _injectName = require('uniforms/injectName');

var _injectName2 = _interopRequireDefault(_injectName);

var _joinName = require('uniforms/joinName');

var _joinName2 = _interopRequireDefault(_joinName);

var _AutoField = require('./AutoField');

var _AutoField2 = _interopRequireDefault(_AutoField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Nest = function Nest(_ref) {
    var children = _ref.children,
        fields = _ref.fields,
        label = _ref.label,
        name = _ref.name,
        props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'fields', 'label', 'name']);
    return _react2.default.createElement(
        'div',
        (0, _filterDOMProps2.default)(props),
        label && _react2.default.createElement(
            'label',
            { htmlFor: props.id },
            label
        ),
        children ? (0, _injectName2.default)(name, children) : fields.map(function (key) {
            return _react2.default.createElement(_AutoField2.default, { key: key, name: (0, _joinName2.default)(name, key) });
        })
    );
};

exports.default = (0, _connectField2.default)(Nest, { includeInChain: false });
//# sourceMappingURL=NestField.js.map