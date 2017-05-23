'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connectField = require('uniforms/connectField');

var _connectField2 = _interopRequireDefault(_connectField);

var _invariant = require('fbjs/lib/invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _react = require('react');

var _NumField = require('./NumField');

var _NumField2 = _interopRequireDefault(_NumField);

var _BoolField = require('./BoolField');

var _BoolField2 = _interopRequireDefault(_BoolField);

var _DateField = require('./DateField');

var _DateField2 = _interopRequireDefault(_DateField);

var _ListField = require('./ListField');

var _ListField2 = _interopRequireDefault(_ListField);

var _NestField = require('./NestField');

var _NestField2 = _interopRequireDefault(_NestField);

var _TextField = require('./TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _RadioField = require('./RadioField');

var _RadioField2 = _interopRequireDefault(_RadioField);

var _SelectField = require('./SelectField');

var _SelectField2 = _interopRequireDefault(_SelectField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Auto = function Auto(props) {
  var component = props.component;
  if (component === undefined) {
    if (props.allowedValues) {
      if (props.checkboxes && props.fieldType !== Array) {
        component = _RadioField2.default;
      } else {
        component = _SelectField2.default;
      }
    } else {
      switch (props.fieldType) {
        case Date:
          component = _DateField2.default;break;
        case Array:
          component = _ListField2.default;break;
        case Number:
          component = _NumField2.default;break;
        case Object:
          component = _NestField2.default;break;
        case String:
          component = _TextField2.default;break;
        case Boolean:
          component = _BoolField2.default;break;
        default:
          throw new Error('Unsupported component type: ' + component);
      }

      (0, _invariant2.default)(component, 'Unsupported field type: %s', props.fieldType.toString());
    }
  }

  return (0, _react.createElement)(component, props);
};

exports.default = (0, _connectField2.default)(Auto, { ensureValue: false, includeInChain: false, initialValue: false });
//# sourceMappingURL=AutoField.js.map
